import { createSlice } from "@reduxjs/toolkit";
// Estado inicial
const initialState = {
  userID: 0,
  userToken: null,
  success: false,
};

//Creacion del estado
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // El 'reducer' de login, establece que el inicio de sesion fue exitoso
    login: (state, { payload }) => {
      const { id, token } = payload;
      state.userID = id;
      state.userToken = token;
      state.success = true;
    },
    // El 'reducer' de logout, establece el cierre de sesion, colocando los valores iniciales
    logout: (state, _) => {
      state.userID = 0;
      state.userToken = null;
      state.success = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
