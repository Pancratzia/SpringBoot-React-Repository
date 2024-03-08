import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    ADD_USER: (state, action) => {
      state.users = [...state.users, { ...action.payload }];
    },
    REMOVE_USER: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    UPDATE_USER: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return user;
      });
    },
    LOADING_USERS: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { ADD_USER, REMOVE_USER, UPDATE_USER, LOADING_USERS } =
  userSlice.actions;
