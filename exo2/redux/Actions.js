import * as ActionTypes from './ActionTypes'; 

export const addOperationAction = (operation) => ({
    type: ActionTypes.ADD_OPERATION,
    payload: operation
});

export const calculateAction = (operations) => ({
    type: ActionTypes.CALCULATE,
    payload: operations
});

export const renewAction = (operation) => ({
    type: ActionTypes.RENEW,
    payload: operation
});

export const addResultAction = (result) => ({
    type: ActionTypes.ADD_RESULT,
    payload: result
});