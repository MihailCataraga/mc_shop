import { configureStore } from "@reduxjs/toolkit";
import itemDataReducer from "./itemData";

const store = configureStore({
    reducer: {
        itemData: itemDataReducer,
    }
})

export default store;