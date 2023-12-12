import { configureStore } from "@reduxjs/toolkit";
// import foodSliceReducer from "./foodSlice";
import authSliceReducer from "./authSlice";
import preOrderSliceReducer from "./preOrderSlice";
const store = configureStore({
    reducer: {
        authentication: authSliceReducer,
        preOrder: preOrderSliceReducer
    }
})

export default store;