import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/Style/index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    <App />
  </Provider>
);
