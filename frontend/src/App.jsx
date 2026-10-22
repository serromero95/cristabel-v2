import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
