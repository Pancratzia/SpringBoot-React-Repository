import { createSlice } from "@reduxjs/toolkit";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
    user: undefined,
    isAdmin: false,
    isAuth: false,
  };

export const authSlice = createSlice({
    name: "auth",
    initialState: initialLogin,
    reducers: {
        ON_LOGIN: (state, {payload}) => {
            state.isAuth = true;
            state.isAdmin = payload.isAdmin;
            state.user = payload.user;
        },
        ON_LOGOUT: (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
        }
    }
});

export const { ON_LOGIN, ON_LOGOUT } = authSlice.actions;