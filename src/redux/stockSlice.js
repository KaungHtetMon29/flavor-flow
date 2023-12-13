import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  error: "",
  stocks: [],
  stockDetail: [],
};

const STOCKURL = "https://flavor-wave-api.onrender.com/api/v1/stocks";

export const fetchStocks = createAsyncThunk("list/stocks", async () => {
  const response = await axios.get(`${STOCKURL}`);
  return response.data;
});

export const searchStock = createAsyncThunk(
  "search/stock",
  async (stockName) => {
    const response = await axios.get(`${STOCKURL}?search=${stockName}`);
    return response.data;
  }
);


export const fetchStockDetails = createAsyncThunk(
  "list/stockDetails",
  async (id) => {
    const response = await axios.get(`${STOCKURL}/${id}/stock_details`);
    return response.data;
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStocks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchStocks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.stocks = action.payload;
    });

    builder.addCase(fetchStockDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchStockDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.stockDetail = action.payload;
    });

    builder.addCase(searchStock.fulfilled, (state, action) => {
      state.isLoading = false;
      state.stocks = action.payload;
    });
  },
});

export default stockSlice.reducer;
