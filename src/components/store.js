import { configureStore } from "@reduxjs/toolkit";
import reducer from "./data";

export default configureStore({
    reducer,
});
