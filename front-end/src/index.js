import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
=======
import "bootstrap/dist/css/bootstrap.min.css"
>>>>>>> c0dcd3b5996f2c3e84068125b0b6183737104563
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