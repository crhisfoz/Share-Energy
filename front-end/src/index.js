import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { GlobalState } from "./context/GlobalState";
import { Router } from "./routes/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalState>
    <Router/>
    </GlobalState>
  </React.StrictMode>
);