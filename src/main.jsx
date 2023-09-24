import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./app/store";
import "./scss/index.scss";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#42a4d2",
    },
    complementary: {
      main: "#d27042",
    },
    analogous: {
      main: "#42d2b8",
    },
    analogous2: {
      main: "#425dd2",
    },
    triadic: {
      main: "#7042d2",
    },
    triadic2: {
      main: "#d242a5",
    },
    blank: {
      main: "#ffffff",
    },
    info: {
      main: "#ffe200",
    },
  },
});

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
