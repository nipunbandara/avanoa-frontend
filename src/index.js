import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import store from './store/store'
import { Provider } from 'react-redux'
import WebGazer from "./components/WebGazer/WebGazer";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthContextProvider>
        <App />
        <WebGazer/>
      </AuthContextProvider>
    </React.StrictMode>
  </Provider>
);
