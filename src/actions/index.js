import * as actionType from './ActionType'
export const addCounter=(val)=>({
            type:actionType.ADD_COUNTER,
            data:val
})
export const removeCounter=(val)=>({
    type:actionType.REMOVE_COUNTER,
    data:val
})