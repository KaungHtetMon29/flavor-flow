import { configureStore } from "@reduxjs/toolkit";
// import foodSliceReducer from "./foodSlice";
import authSliceReducer from "./authSlice";
import preOrderSliceReducer from "./preOrderSlice";
import deliverySliceReducer from "./deliverySlice";
import clientSliceReducer from "./clientSlice";
import stockSliceReducer from "./stockSlice";
const store = configureStore({
    reducer: {
        authentication: authSliceReducer,
        preOrder: preOrderSliceReducer,
        delivery: deliverySliceReducer,
        client: clientSliceReducer,
        stock: stockSliceReducer,
    }
})

export default store;