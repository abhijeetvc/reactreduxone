import * as actionType from './actionTypes'

export const addCounter=()=>({
    type:actionType.ADD_COUNTER,
    payload:1
})

// export const addCounter=()=>{
//     let addObj={
//         type:actionType.ADD_COUNTER,
//         payload:1
//         }
//     return addObj
// }

export const reduceCounter=()=>({
    type:actionType.REDUCE_COUNTER,
    payload:-1
})
