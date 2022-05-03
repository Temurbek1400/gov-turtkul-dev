import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
import { fetchNews } from "store/reducer-and-action/news/newsSlice";
import App from "./App";

const { worker } = require("./mocks/browser");
worker.start();

store.dispatch(fetchNews("all"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
