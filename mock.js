// just mock

const express = require('express')
const app =express()
app.get('/api/course/list',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST')
    res.header('Content-type',"application/json;charset=utf-8")
    res.json({
        code:0,
        list:[
            {name:'web',id:1},
            {name:'java',id:2},
            {name:'python',id:3},
            {name:'dart',id:4},
            
         ]
    })
})


app.listen('9090',()=>{
    console.log('mock启动完毕')
})