import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    isLoading: true,
    error: '',
    deliveries: [],
};

const DELIVERYURL = 'https://flavor-wave.onrender.com/api/v1/deliveries';

export const fetchDeliveries = createAsyncThunk('list/deliveries', async () => {
    const response = await axios.get(`${DELIVERYURL}`);
    console.log('fetch delivery')
   return response.data;
})

export const createDelivery = createAsyncThunk('create/delivery', async (newDelivery) => {
    const response = await axios.post(`${DELIVERYURL}`, newDelivery);
    return response.data;
})

const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDeliveries.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(fetchDeliveries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.deliveries = action.payload;
        })

        builder.addCase(createDelivery.fulfilled, (state, action) => {
            const createdDelivery = action.payload; 
            state.deliveries = [...state.deliveries, createdDelivery];
        })
        
        builder.addCase(createDelivery.rejected, (state) => {
            state.error = ' Delivery cannot created ! ';
        })
    }
})

export default deliverySlice.reducer;