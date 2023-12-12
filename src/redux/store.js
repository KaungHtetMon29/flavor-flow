import { configureStore } from "@reduxjs/toolkit";
// import foodSliceReducer from "./foodSlice";
import authSliceReducer from "./authSlice";
import preOrderSliceReducer from "./preOrderSlice";
import deliverySliceReducer from "./deliverySlice";
import clientSliceReducer from "./clientSlice";
const store = configureStore({
    reducer: {
        authentication: authSliceReducer,
        preOrder: preOrderSliceReducer,
        delivery: deliverySliceReducer,
        client: clientSliceReducer,
    }
})

export default store;