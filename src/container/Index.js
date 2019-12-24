import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {getIndexList} from '../store/index'
import styles  from './Index.css'
import withStyle from '../withStyle'


function Index(props){
    if(props.staticContext){
        props.staticContext.css.push(styles._getCss())
    }
    const [count,setCount] = useState(1)
    useEffect(()=>{
        if(!props.list.length){
            props.getIndexList()
        }
        
    },[])
    return <div className={styles.container}>
        <h1 className={styles.title}>hello {props.title}! {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>add</button>
        <hr/>
        <ul>
            {props.list.map(item=>{
                return <li key={item.id}>{item.name}</li>
            })}
        </ul>
    </div>
}
Index.loadData = (sotre) =>{
    return sotre.dispatch(getIndexList())
}
export default connect(
    state=>({list:state.index.list}),
    {getIndexList}
)(withStyle(Index,styles))