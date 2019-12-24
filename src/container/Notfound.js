import React from 'react'
import {Route} from 'react-router-dom'

function Status({code,children}){
    return <Route render={({staticContext})=>{
        if(staticContext){
            staticContext.statuscode = code //404
        }
        return children
    }}></Route>
}

function Notfound(props){
    // console.log('Notfound',props)
    // 渲染这个组件，给statuscode赋值
    return <Status code={404}>
        <h1>404了</h1>
    </Status>
}

export default Notfound