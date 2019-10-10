
const staticCounter = {
    counter: 200,
}

 function reduser2(state=staticCounter, action){
    switch(action.type){
        case 'ADD_REDUSER_2':
            return {
                counter:state.counter + action.payload,
            }
        default:
            return state
    }
}

export default reduser2