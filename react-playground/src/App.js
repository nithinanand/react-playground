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
        </Routes>
      </main>
    </div>
  );
}

export default App;
