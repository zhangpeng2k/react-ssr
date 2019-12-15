import Axios from "axios"

// 首页的逻辑

//actionType
const GET_LIST = 'INDEX/USER_INFO'

// actionCreator
const changeUserInfo = data => ({
    type: GET_LIST,
    data
})

export const getUserInfo = server => {
    return(dispatch, getState, axiosInstance)=> {
        return Axios.get('http://localhost:9091/api/user/info')
            .then(res => {
                const { data } = res.data;
                console.log('用户信息',data)
                dispatch(changeUserInfo(data));
            })
    }
}


const defaultState = {
    userinfo: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            const newState = {
                ...state,
                userinfo: action.data
            }
            return newState
        default:
            return state
    }
}