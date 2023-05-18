import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "tailwindcss/tailwind.css";
import { PositionContextProvider } from './context'

ReactDOM.render(
  <PositionContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PositionContextProvider>,
  document.getElementById("root")
);
