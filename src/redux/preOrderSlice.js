import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  error: "",
  preOrders: [],
  unPermitOrders: [],
  preOrderItems: [],
  loadingPreOrderItem: true,
};

const PREORDERURL = "https://flavor-wave-api.onrender.com/api/v1/preorders";

export const fetchPreOrders = createAsyncThunk("index/preOrders", async () => {
  const response = await axios.get(`${PREORDERURL}`);
  const data = response.data;
  return data;
});

export const fetchPreOrderItems = createAsyncThunk('all/preOrderItems', async (id) => {
    const response = await axios.get(`${PREORDERURL}/${id}/preorder_items`);
    return response.data;
})

export const createPreOrder = createAsyncThunk(
  "create/preorders",
  async (newPreorder) => {
    const response = await axios.post(`${PREORDERURL}`, newPreorder);
    return response.data;
  }
);

export const updatePreOrder = createAsyncThunk(
  "update/preOrders",
  async (id, updateData) => {
    const response = await axios.patch(`${PREORDERURL}/${id}`, updateData);
    return response.data;
  }
);

export const searchPreOrder = createAsyncThunk(
  "search/preOrders",
  async (clientName) => {
    const response = await axios.get(`${PREORDERURL}?search=${clientName}`);
    return response.data;
  }
);

export const filterOrderStatus = createAsyncThunk(
  "filterStatus/preOrders",
  async (orderStatus) => {
    const response = await axios.get(
      `${PREORDERURL}?order_status=${orderStatus}`
    );
    return response.data;
  }
);

export const filterOrderDate = createAsyncThunk(
  "filterDate/preOrders",
  async (orderDate) => {
    // console.log(orderDate)
    // console.log(`${PREORDERURL}?order_date='${orderDate}'`)
    const response = await axios.get(`${PREORDERURL}?order_date=${orderDate}`);
    return response.data;
  }
);

const preOrderSlice = createSlice({
  name: "preorder",
  initialState,
  reducers: {
    filterByOrderStatus: (state, action) => {
      const targetStatus = action.payload;
      if (targetStatus != "0") {
        // '0' is the default or all status value
        const filteredPreOrders = state.preOrders.filter(
          (el) => el.order_status === targetStatus
        );
        return {
          ...state,
          filteredPreOrders,
        };
      }
      // If targetStatus is not present or equal to '0', return the original state
      return state;
    },

    filterByOrderDate: (state, action) => {
      const targetDate = action.payload;
      if (!targetDate) {
        state.error = `No preOrder in ${targetDate}`;
      }
      const filteredPreOrders = state.preOrders.filter(
        (el) => el.order_date == targetDate
      );
      state.preOrders = [...filteredPreOrders];
    },

    updateStatus: (state, action) => {
      const id = action.payload.id;
      const status = action.payload.value;

      const newPreOrders = state.preOrders.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            order_status: status,
          };
        }
        return el;
      });

      state.preOrders = [...newPreOrders];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPreOrders.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPreOrders.fulfilled, (state, action) => {
      state.preOrders = action.payload;
      state.unPermitOrders = state.preOrders.filter((order) => !order.permission);
      console.log(state.unPermitOrders);
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(fetchPreOrderItems.pending, (state) => {
        state.loadingPreOrderItem = true
    })

    builder.addCase(fetchPreOrderItems.fulfilled, (state, action) => {
        state.loadingPreOrderItem = false
        state.preOrderItems = action.payload;
    })

    builder.addCase(createPreOrder.fulfilled, (state, action) => {
      const createdData = action.payload;
      state.preOrders = [...state.preOrders, createdData];
    });

    builder.addCase(updatePreOrder.fulfilled, (state, action) => {
      const updatedData = action.payload;
      state.preOrders = state.preOrders.map((item) =>
        item.id === updatedData.id ? updatedData : item
      );
    });

    builder.addCase(filterOrderDate.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(filterOrderDate.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.isLoading = false;
      state.preOrders = action.payload;
    });

    builder.addCase(filterOrderStatus.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(filterOrderStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.preOrders = action.payload;
    });

    builder.addCase(searchPreOrder.fulfilled, (state, action) => {
      state.isLoading = true;
      state.preOrders = action.payload;
      state.error = "";
    });
  },
});

export default preOrderSlice.reducer;
export const { filterByOrderDate, filterByOrderStatus, updateStatus } =
  preOrderSlice.actions;
