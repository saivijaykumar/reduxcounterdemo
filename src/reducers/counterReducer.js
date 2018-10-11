import * as actionType from'../actions/ActionType';

const counterReducer=(state=0,action)=>{

        switch(action.type){
            case actionType.ADD_COUNTER:
                 return state=state+action.data;
            case actionType.REMOVE_COUNTER:
                 return state=state-action.data;
            default:
               return state;
        }
}

export default counterReducer;