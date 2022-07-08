import { combineReducers } from 'redux';
import cartReducer from "./cartReducer";
import authReducer from './authReducer';
import agentReducer from "./agentReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    agent: agentReducer
});

export default rootReducer;