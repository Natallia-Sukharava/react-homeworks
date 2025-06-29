import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './themeContext';
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
     <BrowserRouter>
       <App />
     </BrowserRouter>
    </ThemeProvider>
  </Provider>
);