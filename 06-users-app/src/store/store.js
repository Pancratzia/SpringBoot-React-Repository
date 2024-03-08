import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/users/usersSlice";

export const store = configureStore({
    reducer: {
        users: userSlice.reducer,
    }
})