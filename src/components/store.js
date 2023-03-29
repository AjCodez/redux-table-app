import { configureStore } from "@reduxjs/toolkit";
import reducer from "./data";
// import { Saga } from "redux-saga";
import thunk from "redux-thunk";

export default configureStore(
    {
        reducer,
        middleware: [thunk],
        preloadedState: {}
    }
);