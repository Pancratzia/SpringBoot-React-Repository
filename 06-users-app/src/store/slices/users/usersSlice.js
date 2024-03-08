import { createSlice } from "@reduxjs/toolkit";

export const initialUserForm = {
    id: 0,
    username: "",
    password: "",
    email: "",
    admin: false,
  };

  export const initialErrors = {
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
    ADD_USER: (state, {payload}) => {
      state.users = [...state.users, { ...payload }];
      state.userSelected = initialUserForm;
      state.visibleForm = false;
    },
    REMOVE_USER: (state, {payload}) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    UPDATE_USER: (state, {payload}) => {
      state.users = state.users.map((user) => {
        if (user.id === payload.id) {
          return {
            ...payload,
          };
        }
        return user;
      });
      state.userSelected = initialUserForm;
      state.visibleForm = false;
    },
    LOADING_USERS: (state, {payload}) => {
      state.users = payload;
    },
    ON_USER_SELECTED_FORM: (state, {payload}) => {
      state.userSelected = payload;
      state.visibleForm = true;
    },
    ON_OPEN_FORM: (state) => {
      state.visibleForm = true;
    },
    ON_CLOSE_FORM: (state) => {
      state.visibleForm = false;
      state.userSelected = initialUserForm;
    },
    SET_ERROR: (state, {payload}) => {
        state.errors = payload
    }
  },
});

export const { ADD_USER, REMOVE_USER, UPDATE_USER, LOADING_USERS, ON_USER_SELECTED_FORM, ON_OPEN_FORM, ON_CLOSE_FORM, SET_ERROR} =
  userSlice.actions;
