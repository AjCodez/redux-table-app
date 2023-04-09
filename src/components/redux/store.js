import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    user: userSlice,
});
const store = configureStore({
    reducer,

});

export default store;