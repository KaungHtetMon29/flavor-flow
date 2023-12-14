import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  error: "",
  filterOrderStatus: [],
  preOrders: [],
  unPermitOrders: [],
  urgentOrders: [],
  loadingPreOrderItem: true,
  preOrderItems: [],
  loadingPreOrderItem: true,
};

const PREORDERURL = "https://flavor-wave-api.onrender.com/api/v1/preorders";

export const fetchPreOrders = createAsyncThunk("index/preOrders", async () => {
  const response = await axios.get(`${PREORDERURL}`);
  const data = response.data;
  return data;
});

export const fetchPreOrderItems = createAsyncThunk(
  "all/preOrderItems",
  async (id) => {
    const response = await axios.get(`${PREORDERURL}/${id}/preorder_items`);
    return response.data;
  }
);

export const createPreOrder = createAsyncThunk(
  "create/preorders",
  async (newPreorder) => {
    const response = await axios.post(`${PREORDERURL}`, newPreorder);
    return response.data;
  }
);

export const updatePreOrder = createAsyncThunk(
  "update/preOrders",
  async ({ id, value }) => {
    const updateData = {
      order_status: value,
    };

    const response = await axios.patch(`${PREORDERURL}/${id}`, updateData);
    return response.data;
  }
);

export const updatePermission = createAsyncThunk(
  "update/preOrders",
  async ({ id, value }) => {
    console.log(value);
    const updateData = {
      permission: value,
    };
    // console.log(updateData);
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

      if (targetStatus === "all") {
        state.filterOrderStatus = [...state.preOrders];
        console.log(state.filterOrderStatus);
      } else {
        const filterOrders = state.preOrders.filter(
          (el) => el.order_status === targetStatus
        );
        state.filterOrderStatus = [...filterOrders];
      }
    },

    changePermissionFalse: (state, action) => {
      const { id } = action.payload;

      // Updating preOrders array
      state.urgentOrders = state.urgentOrders.map((order) => {
        if (order.id === id) {
          // If the ID matches, update the permission
          return {
            ...order,
            permission: false,
          };
        }
        // If the ID doesn't match, return the order as it is
        return order;
      });

      // Also update unPermitOrders if needed
      state.unPermitOrders = state.urgentOrders;
      state.preOrders = state.urgentOrders;
      console.log(state.unPermitOrders.map((order) => order.permission));
      console.log(state.preOrders.map((order) => order.permission));

      console.log("Permission set to false");
    },

    changePermissionTrue: (state, action) => {
      console.log("change permission true");
      const { id } = action.payload;
      state.urgentOrders = state.urgentOrders.map((order) => {
        if (order.id === id) {
          // If the ID matches, update the permission
          return {
            ...order,
            permission: true,
          };
        }
        // If the ID doesn't match, return the order as it is
        return order;
      });

      // Also update unPermitOrders if needed
      state.unPermitOrders = state.urgentOrders;
      state.preOrders = state.urgentOrders;

      console.log("Permission set to true");
      console.log(state.unPermitOrders.map((order) => order.permission));
      console.log(state.preOrders.map((order) => order.permission));
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
      const { id, value } = action.payload;
      const updatedOrders = state.preOrders.map((preOrder) =>
        preOrder.id === id ? { ...preOrder, order_status: value } : preOrder
      );

      // const urgentOrders = updatedOrders.filter((order) => order.urgent && !order.pemermission)
      // state.urgentOrders = [...urgentOrders];
      return {
        ...state,
        preOrders: updatedOrders,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPreOrders.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchPreOrders.fulfilled, (state, action) => {
      // const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      state.filterOrderStatus = action.payload.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      state.preOrders = action.payload.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      state.unPermitOrders = state.preOrders.filter(
        (order) => order.permission
      );
      const orderIsGrant = [...state.preOrders];
      state.urgentOrders = orderIsGrant.filter((order) => order.urgent);
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(fetchPreOrderItems.pending, (state) => {
      state.loadingPreOrderItem = true;
    });

    builder.addCase(fetchPreOrderItems.fulfilled, (state, action) => {
      state.loadingPreOrderItem = false;
      state.preOrderItems = action.payload;
    });

    builder.addCase(createPreOrder.fulfilled, (state, action) => {
      const createdData = action.payload;
      state.preOrders = [...state.preOrders, createdData];
    });

    builder.addCase(updatePreOrder.fulfilled, (state, action) => {
      const updatedData = action.payload;
      state.preOrders = state.preOrders.map((item) =>
        item.id === updatedData.id ? updatedData : item
      );
      state.filterOrderStatus = [...state.preOrders];
      state.urgentOrders = [...state.preOrders];
      state.unPermitOrders = [...state.preOrders];
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
      state.isLoading = false;
      state.preOrders = action.payload;
      state.filterOrderStatus = [...state.preOrders];
      state.error = "";
    });
  },
});

export default preOrderSlice.reducer;
export const {
  filterByOrderDate,
  filterByOrderStatus,
  updateStatus,
  changePermissionFalse,
  changePermissionTrue,
} = preOrderSlice.actions;
