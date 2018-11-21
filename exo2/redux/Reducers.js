import * as ActionTypes from './ActionTypes';

export const AppReducer = (state = {operations: [], resultat:0}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_OPERATION:
        return{...state,

            operations:state.operations.concat(action.payload), 
            resultat: state.operations.concat(action.payload)
            };
        case ActionTypes.CALCULATE:
            const newCalcul = state.operations.concat(action.payload).join("").length <= 2 ? state.operations.concat(action.payload).join("") : eval(state.operations.concat(action.payload).join(""));
            return {
                ...state,
                operations: [Math.fround(eval(newCalcul))],
                resultat: eval(newCalcul)
            }; 
        case ActionTypes.RENEW:
            return {
                operations: [],
                resultat: 0
            };
        default:            
            return state; 
    }
    
};


