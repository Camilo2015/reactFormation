import { createStore, combineReducers, applyMiddleware } from "redux";
import { AppReducer} from './Reducers'; 
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            appReducer: AppReducer
        }), 
        applyMiddleware(thunk)
    ); 
    return store;   
}