import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "../features/auth/authSlice";

// Configuracion del 'Store' del estado de autenticacion

const reducers = combineReducers({
  auth: authReducer,
})

const persistConfig = {
  key: "codesafio",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);

export default store;
