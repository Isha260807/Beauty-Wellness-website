import { createSlice } from "@reduxjs/toolkit";

// Load saved user from localStorage (if exists)
const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: savedUser?.user || null,
  token: savedUser?.token || null,
  role: savedUser?.role || null,
  isAuthenticated: savedUser ? true : false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { user, token, role } = action.payload;

      state.user = user;
      state.token = token;
      state.role = role;
      state.isAuthenticated = true;

      // Save to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ user, token, role })
      );
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;

      // Remove from localStorage
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;

