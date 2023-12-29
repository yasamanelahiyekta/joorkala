import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { getPc, getGr } from "./Reducers";
const reducers = combineReducers({ getGr, getPc })
const middleWare = [thunk]
const localPc = JSON.parse(localStorage.getItem("pc")) || []
const localGr = JSON.parse(localStorage.getItem("gr")) || []
const initialState = {
    getPc: { pcData: localPc, pcLoading: false, pcError: "" },
    getGr: { grData: localGr, grLoading: false, grError: "" }
}
const store = createStore(reducers, initialState, applyMiddleware(...middleWare))
export default store