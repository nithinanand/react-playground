import "./App.css";
import React from "react";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import DataPage from "./DataPage";
import PageNotFound from "./PageNotFound";



function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<DataPage />} />
          <Route path="/:unknown" element={<PageNotFound />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:unknown" element={<PageNotFound />} />
          <Route path="/Products/ram/:ram" element={<Products />} />
          <Route path="/Products/storage/:storage" element={<Products />} />
          <Route path="/Products/brand/:brand" element={<Products />} />
          <Route path="/Products/processor/:processor" element={<Products />} />
          <Route path="/Products/os/:os" element={<Products />} />
          <Route path="/Products/price/:price" element={<Products />} />
          <Route path="/Products/ram/:ram/storage/:storage" element={<Products />} />
          <Route path="/Products/ram/:ram/brand/:brand" element={<Products />} />
          <Route path="/refresh" element={<DataPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
