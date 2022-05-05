import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todosSlice from "./todosSlice";

export const store = configureStore({
    reducer: {
        todos:todosSlice
    },
    middleware:[thunk]
})