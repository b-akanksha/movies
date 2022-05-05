import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { initialState, reducer } from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <HashRouter>
        <App />
      </HashRouter>
    </StateProvider>
  </React.StrictMode>
);
