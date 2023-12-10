import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: true,
    isAuthenticated: false,
    authToken: '',
    response: {},
    user_id: '',
    message: '',
}

const LOGIN_URL = 'http://127.0.0.1:3000/login'
const SIGNUP_URL = 'http://127.0.0.1:3000/signup'
const LOGOUT_URL = 'http://127.0.0.1:3000/logout'

export const userSignUp = createAsyncThunk('user/signup', async (newUser) => {
    const response = await axios.post(`${SIGNUP_URL}`, newUser );
    return response.data
})

export const userLogIn = createAsyncThunk('user/login', async (newUser) => {
    const response = await axios.post(`${LOGIN_URL}`, newUser);
    sessionStorage.setItem('authToken', response.headers.authorization)
    return response.data.status;
})

export const userLogOut = createAsyncThunk('user/logout', async (authToken) => {
    const response = await axios.delete(`${LOGOUT_URL}`, {
        headers: {
            Authorization: authToken
        }
    })
    return response.status
})

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(userSignUp.pending, (state) => {
            console.log(state.isLoading)
        });

        builder.addCase(userSignUp.fulfilled, (state, action) => ({
            ...state,
            response: action.payload,
        }));

        builder.addCase(userLogIn.fulfilled, (state, action) => ({
            ...state,
            isLoading: false,
            isAuthenticated: true,
            authToken: action.payload,
            response: action.payload.data.user,
            user_id: action.payload.data.user.id,
            message: action.payload.message,
        }))
    }
})

export default authSlice.reducer;