import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import History from "./components/History";
import Core from "./components/Core";
import IT from "./components/IT";
import Distribute from "./components/Distribute";

import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
// import Leader from "./components/Leader";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/History" element={<History />} />
          <Route path="/Core" element={<Core />} />
          <Route path="/IT" element={<IT />} />
          <Route path="/Distribute" element={<Distribute />} />
          <Route path="/Leader" element={<IT />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
