import { createSlice } from "@reduxjs/toolkit";
// Estado inicial
const initialState = {
  userInfo: {},
  userToken: null,
  success: false,
  error: null,
};

//Creacion del estado
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // El 'reducer' de login, establece que el inicio de sesion fue exitoso
    login: (state, { payload }) => {
      const { user, token } = payload.item;
      state.success = true;
      state.userInfo = user;
      state.userToken = token;
    },
    // El 'reducer' de logout, establece el cierre de sesion, colocando los valores iniciales
    logout: (state, _) => {
      state.success = false;
      state.userInfo = {};
      state.userToken = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
