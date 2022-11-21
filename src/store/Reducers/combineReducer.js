import { combineReducers } from "redux";
import { getProductReducer } from "./ProductReducers";

const combineReducer = combineReducers({
    getProductReducer: getProductReducer
});

export default combineReducer
