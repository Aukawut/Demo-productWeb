import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DetailCHN from "./components/DetailCHN"
import NavBar from "./components/NavBar"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/china" element={<DetailCHN />}></Route>
    </Routes>
  </BrowserRouter>
)
