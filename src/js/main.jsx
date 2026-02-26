import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// CSS
import "../styles/index.css";

// Importar tu componente
import TrafficLight from "./TrafficLight";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>
);