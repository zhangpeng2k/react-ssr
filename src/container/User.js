import React from 'react'
import {connect} from 'react-redux'
import {getIndexList} from '../store/index'
import {getUserInfo} from '../store/user'
import {Redirect} from 'react-router-dom'

function User(props){

    //没登录跳转到登录
    return <Redirect to="/"></Redirect>

    return <div>
        <h1>你好 {props.userinfo.name},你们最棒的人是{props.userinfo.best}</h1>
    </div>
}
User.loadData = (sotre) =>{
    return sotre.dispatch(getUserInfo())
}
export default connect(
    state=>({userinfo:state.user.userinfo}),
    // {getUserInfo}
)(User)