import { configureStore } from "@reduxjs/toolkit";
// import foodSliceReducer from "./foodSlice";
import authSliceReducer from "./authSlice";
import preOrderSliceReducer from "./preOrderSlice";
import deliverySliceReducer from "./deliverySlice";
const store = configureStore({
    reducer: {
        authentication: authSliceReducer,
        preOrder: preOrderSliceReducer,
        delivery: deliverySliceReducer,
    }
})

export default store;