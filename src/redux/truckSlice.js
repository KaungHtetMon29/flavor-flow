import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  error: "",
  trucks: [],
  availableTrucks: [],
};

const TRUCKURL = "https://flavor-wave-api.onrender.com/api/v1/trucks";

export const fetchTrucks = createAsyncThunk("list/trucks", async () => {
  const response = await axios.get(`${TRUCKURL}`);
  return response.data;
});

const truckSlice = createSlice({
  name: "truck",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrucks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTrucks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.trucks = action.payload;
      state.availableTrucks = state.trucks.filter(
        (truck) => truck.available === true
      );
    });
  },
});

export default truckSlice.reducer;
