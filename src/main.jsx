
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Router from "./Router/Router";
// import Router from "./Router/Router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Router></Router>
  </BrowserRouter>
);
