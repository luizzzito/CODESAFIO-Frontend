import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

// Configuracion del 'Store' del estado de autenticacion
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store
