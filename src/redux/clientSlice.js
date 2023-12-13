import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  error: "",
  clients: [],
};

const CLIENTURL = "https://flavor-wave-api.onrender.com/api/v1/clients";

export const fetchClients = createAsyncThunk("list/clients", async () => {
  const response = await axios.get(`${CLIENTURL}`);
  return response.data;
});

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClients.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchClients.fulfilled, (state, action) => {
      state.isLoading = false;
      state.clients = action.payload;
    });
  },
});

export default clientSlice.reducer;
