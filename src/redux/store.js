import { configureStore } from "@reduxjs/toolkit";
import foodSliceReducer from "./foodSlice";
import authSliceReducer from "./authSlice";
const store = configureStore({
    reducer: {
        authentication: authSliceReducer,
    }
})

export default store;