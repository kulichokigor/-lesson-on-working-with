const staticCounter = {
    counter:0,
}

export default function reduser1(state=staticCounter, action){
    switch(action.type){
        case 'ADD':
            return {
                counter:state.counter + 1,
            }
        case 'SUB':
            return {
                counter:state.counter - 1,
            }
        case 'RES':
            return {
                counter: 0,
            }
        case 'ADD_NUMBER':
            return {
                counter:state.counter + action.value
            }
        default:
            return state
    }
}