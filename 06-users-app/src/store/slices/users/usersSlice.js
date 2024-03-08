import { createSlice } from "@reduxjs/toolkit";

export const initialUserForm = {
    id: 0,
    username: "",
    password: "",
    email: "",
    admin: false,
  };

  const initialErrors = {
    username: "",
    email: "",
    password: "",
  };

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userSelected: initialUserForm,
    visibleForm: false,
    errors: initialErrors,
  },
  reducers: {
    ADD_USER: (state, action) => {
      state.users = [...state.users, { ...action.payload }];
      state.userSelected = initialUserForm;
      state.visibleForm = false;
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
      state.userSelected = initialUserForm;
      state.visibleForm = false;
    },
    LOADING_USERS: (state, action) => {
      state.users = action.payload;
    },
    ON_USER_SELECTED_FORM: (state, action) => {
      state.userSelected = action.payload;
      state.visibleForm = true;
    },
    ON_OPEN_FORM: (state) => {
      state.visibleForm = true;
    },
    ON_CLOSE_FORM: (state) => {
      state.visibleForm = false;
      state.userSelected = initialUserForm;
    }
  },
});

export const { ADD_USER, REMOVE_USER, UPDATE_USER, LOADING_USERS, ON_USER_SELECTED_FORM, ON_OPEN_FORM, ON_CLOSE_FORM } =
  userSlice.actions;
