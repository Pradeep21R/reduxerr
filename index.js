
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

const inc = 'incrementr';
const init = 'init';
const dec = 'decrement';
const incByAut = 'incrementByAmount'
//store
const store = createStore(reducer,applyMiddleware(logger.default, thunk.default));
//reducer
const History=[]
function reducer (state={amount:1},action){

    switch(action.type){

        case init:
            return {amount:action.payload}
        case inc:
            return {amount:state.amount+1}

        case dec:
                return {amount:state.amount-1}
            
        case incByAut:
            return {amount:state.amount+action.payload}
            
        default:
            return state

    }}

    


// //global
// store.subscribe(()=>{
//     history.push(store.getState());
//     console.log(history);
// })

// //async api call
// async function getUser(){
//     const {data} = await axios.get('http://localhost:3000/account/1')
//     console.log(data)
// }

// getUser()

//action creater
async function getUser(dispatch,getState){
    const {data} = await axios.get('http://localhost:3000/account/1')
     dispatch(initUser(data.amount))
}

function init(){
    return {type:init,payload}
}
function increment(){
    return {type:inc}
}
function decrement(){
    return {type:dec}
}
function incrementByAmount(value){
    return {type:incByAut,payload:value}
}

setInterval(()=>{
    store.dispatch(initUser)
},2000)
