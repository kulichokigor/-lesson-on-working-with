const redux = require('redux');

const elemAdd = {
    counter: 0
}

//Reduser
const reduser = (state=elemAdd, actions)=>{
    if(actions.type==='PLUS'){
        return{
            counter:state.counter + actions.value
        }
    }
    if(actions.type==='MINUS'){
        return{
            counter:state.counter - actions.value,
            newKey:'function minus'
        }
    }
    if(actions.type ==='CHANGE'){
        return{
            changeCounter:state.counter+state.counter + actions.value + ` => 0 + 10 Actions-3`
        }
    }
    return state
}

//Store
const store = redux.createStore(reduser)

store.subscribe(()=>{
    console.log('Subscribe', store.getState())
})

//Actions

const actionAdd = {
    type: 'PLUS',
    value: 1
}

store.dispatch(actionAdd)

store.dispatch({
    type: 'MINUS',
    value: 1,
})

store.dispatch({
    type: 'CHANGE',
    value: 10,
})