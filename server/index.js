// 这里的node代码，会用babel处理
import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import {StaticRouter,matchPath,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {getServerStore} from '../src/store/store'
import routes from '../src/App'
import Header from '../src/component/Header';


const store = getServerStore()
const app = express()
app.use(express.static('public'))
app.get('*',(req,res)=>{
    // 获取根据路由渲染出的组件，并且拿到loadData方法，获取数据

    // 存储网络请求
    const promises = []
    
    // 路由匹配
    routes.some(route=>{
        const match = matchPath(req.path,route)
        if(match){
            const {loadData} = route.component
            if(loadData){
                const promise = new Promise((resolve,reject)=>{
                    loadData(store).then(resolve).catch(reject)
                })
                promises.push(promise)
            }
            
        }
    })
    // 等待所有网络请求结束再渲染
    Promise.all(promises.map(promise=>{
        promise.then(()=>{
            // do nothing...

            // 带胜老师很牛批 XD
        }).catch(e=>{
            console.log('有请求出错了：',e.response.status);
            // 这里应该reject出去吗？ (思考...
        })
    })).then(()=>{
        
        // 把react组件解析成html
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Header></Header>
                    {routes.map(route=>{
                        return <Route {...route}></Route>
                    })}
                </StaticRouter>
            </Provider>
        )
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
    }).catch((reason)=>{
        
        res.send('报错页面500')
    })
    
})
app.listen(9093,()=>{
    console.log('监听完毕 http://localhost:9093/')
})