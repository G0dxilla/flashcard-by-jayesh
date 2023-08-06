import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import { configureStore } from "@reduxjs/toolkit";
import Store from "./redux/store";
import { Provider } from "react-redux";
// import rootReducer from "./rootReducer";
//  Store == rootReducer;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*giving the access of store to all components */}
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

