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
import { store } from "./app/store";

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
    info: {
      main: "#ffe200",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
