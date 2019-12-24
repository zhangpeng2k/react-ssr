// 这里的node代码，会用babel处理
import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import {StaticRouter,matchPath,Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {getServerStore} from '../src/store/store'
import routes from '../src/App'
import Header from '../src/component/Header';
import proxy from 'http-proxy-middleware'


const store = getServerStore()
const app = express()
app.use(express.static('public'))

//客户端api开头
app.use('/api',proxy({
    target:'http://localhost:9090',
    changeOrigin:true
}))

app.get('*',(req,res)=>{
    // 获取根据路由渲染出的组件，并且拿到loadData方法，获取数据
    
    // if(req.url.startsWith('/api/')){
    //     //不渲染页面 使用axios转发
    // }

    // 存储网络请求
    const promises = []
    
    // 路由匹配
    routes.some(route=>{
        const match = matchPath(req.path,route)
        if(match){
            const {loadData} = route.component
            if(loadData){
                // 包装后
                const promise = new Promise((resolve,reject)=>{
                    loadData(store).then(resolve).catch(resolve)
                })
                promises.push(promise)
                // promises.push(loadData(promise))
                
            }
            
        }
    })
    // 等待所有网络请求结束再渲染
    Promise.all(promises).then(()=>{
        const context = {}
        // 把react组件解析成html
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <Header></Header>
                    <Switch>
                    {routes.map(route=>{
                        return <Route {...route}></Route>
                    })}
                    </Switch>
                    
                </StaticRouter>
            </Provider>
        )
        // console.log('context',context)
        if(context.statuscode){
            // 状态切换和页面跳转
            res.status(context.statuscode)
        }
        if(context.action =="REPLACE"){
            res.redirect(301,context.url)
        }

        res.send(`
        <html>
        <head>
            <meta charset="utf-8"/>
            <title>react ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window._context=${JSON.stringify(store.getState())}
            </script>
            <script src="/bundle.js"></script>
        </body>
        </html>
        `)
    }).catch((error)=>{
        console.log(error)
        res.send('报错页面500')
    })
    
})
app.listen(9093,()=>{
    console.log('监听完毕 http://localhost:9093/')
})