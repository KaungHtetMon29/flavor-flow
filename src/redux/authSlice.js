import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  authToken: "",
  response: {},
  role: "sale",
  user_id: "",
  message: "",
};

const LOGIN_URL = "https://flavor-wave-api.onrender.com/login";
const LOGOUT_URL = "https://flavor-wave-api.onrender.com/logout";

export const userLogIn = createAsyncThunk("user/login", async (newUser) => {
  const response = await axios.post(`${LOGIN_URL}`, newUser);
  sessionStorage.setItem("authToken", response.headers.authorization);
  return response.data.status;
});

export const userLogOut = createAsyncThunk("user/logout", async (authToken) => {
  const response = await axios.delete(`${LOGOUT_URL}`, {
    headers: {
      Authorization: authToken,
    },
  });
  return response.status;
});

const authSlice = createSlice({
  name: "authentication",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userLogIn.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      isAuthenticated: true,
      authToken: action.payload,
      response: action.payload.data.user,
      user_id: action.payload.data.user.id,
      message: action.payload.message,
    }));
  },
});

export default authSlice.reducer;
