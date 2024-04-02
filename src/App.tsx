import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "./flows/main/MainScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<MainScreen />} />

          {/* Rutas privadas */}
          {/* <Route path="/*" element={<PrivateRoutes />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
