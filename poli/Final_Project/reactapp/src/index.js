import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import store, { persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate> 
    </Provider>
  </React.StrictMode>
);
