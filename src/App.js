import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favourites from "./components/favourites";
import { Header } from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
