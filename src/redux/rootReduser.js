

const staticCounter = {
    counter:0
}

export default function rootReduser(state=staticCounter, actions){
    switch(actions.type){
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
    }
        
    
    return state
}