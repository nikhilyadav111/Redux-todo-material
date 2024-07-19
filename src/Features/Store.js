import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Todo/todoSlice";
import quoteReducer from "./Quote/quoteSlice";
const store=configureStore({
    reducer:{
    todos:todoReducer,
    quote:quoteReducer,
    },
});
export default store;