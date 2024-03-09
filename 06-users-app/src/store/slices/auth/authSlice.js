import { createSlice } from "@reduxjs/toolkit";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
    user: undefined,
    isAdmin: false,
    isAuth: false,
    isLoginLoading: false,
  };

export const authSlice = createSlice({
    name: "auth",
    initialState: initialLogin,
    reducers: {
        ON_LOGIN: (state, {payload}) => {
            state.isAuth = true;
            state.isAdmin = payload.isAdmin;
            state.user = payload.user;
            state.isLoginLoading = false;
        },
        ON_LOGOUT: (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
            state.isLoginLoading = false;
        },
        ON_INITIAL_LOGIN: (state) => {
            state.isLoginLoading = true
        }
    }
});

export const { ON_LOGIN, ON_LOGOUT, ON_INITIAL_LOGIN } = authSlice.actions;