import { combineReducers } from 'redux';
import cartReducer from "./cartReducer";
import authReducer from './authReducer';
import agentReducer from "./agentReducer";
import salesReducer from './salesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    agent: agentReducer,
    sales: salesReducer
});

export default rootReducer;