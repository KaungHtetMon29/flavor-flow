import { configureStore } from "@reduxjs/toolkit";
// import foodSliceReducer from "./foodSlice";
import authSliceReducer from "./authSlice";
import preOrderSliceReducer from "./preOrderSlice";
import deliverySliceReducer from "./deliverySlice";
import clientSliceReducer from "./clientSlice";
import stockSliceReducer from "./stockSlice";
import truckSliceReducer from "./truckSlice";
const store = configureStore({
    reducer: {
        authentication: authSliceReducer,
        preorder: preOrderSliceReducer,
        delivery: deliverySliceReducer,
        client: clientSliceReducer,
        stock: stockSliceReducer,
        truck: truckSliceReducer,
    }
})

export default store;