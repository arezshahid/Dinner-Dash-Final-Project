import React from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Home } from "./Containers/home";
import { Menu } from "./Containers/menu";
import Admin from "./Containers/admin";
import AdminCategory from "./Containers/adminCategory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/category" element={<AdminCategory />} />
      </Routes>
    </div>
  );
}

export default App;
