import ReactDOM from "react-dom/client";
import Login from "./pages/login"
import GlobalStyles from "./global";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Login />
  </React.StrictMode>
)