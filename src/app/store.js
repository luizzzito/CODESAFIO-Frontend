import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "../features/auth/authSlice";
import storage from "redux-persist/lib/storage"

// Configuracion del 'Store' del estado de autenticacion

const reducers = combineReducers({
  auth: authReducer,
})

const persistConfig = {
  key: "codesafio",
  version:1,
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
