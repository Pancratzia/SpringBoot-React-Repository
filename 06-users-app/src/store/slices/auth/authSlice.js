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
        ON_LOGIN: (state, action) => {
            
        },
        ON_LOGOUT: (state, action) => {
            
        }
    }
});