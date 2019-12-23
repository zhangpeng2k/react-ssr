// 存储的入口
import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import Axios from 'axios'
import indexReducer from './index'
import userReducer from './user'


const reducer = combineReducers({
    index:indexReducer,
    user:userReducer
})

const clientAxios = Axios.create({
    baseURL:'/'
})
const serverAxios = Axios.create({
    baseURL:'http://localhost:9090/'
})

// export default store
export const getServerStore = () =>{
    // 服务端通过server的dispatch获取和填充
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverAxios)))
}
export const getClientStore = () =>{
    // 浏览器端
    const defaultState = window._context ?window._context :{}
    return createStore(reducer,defaultState,applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
