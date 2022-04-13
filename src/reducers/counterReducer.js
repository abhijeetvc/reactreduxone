import * as actionType from '../actions/actionTypes'

const counterReducer=(state=100,action)=>{

    let latestState

    switch(action.type){
        case actionType.ADD_COUNTER:
             latestState=state + action.payload
             return latestState
        
        case actionType.REDUCE_COUNTER:
             latestState=state + action.payload
             return latestState

        default:
            return state     
    }
}

export default counterReducer