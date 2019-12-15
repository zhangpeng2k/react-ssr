import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from '../src/App'
import {getClientStore} from '../src/store/store'
import Header from '../src/component/Header';

const store = getClientStore()
// 注水 client入口 
const Page = (<Provider store={store}>
<BrowserRouter>
<Header></Header>
    {routes.map(route=> <Route {...route}></Route>)}
</BrowserRouter>
</Provider>)
ReactDom.hydrate(Page,document.getElementById('root'))

