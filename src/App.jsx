import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import History from "./components/History";
import Core from "./components/Core";
import IT from "./components/IT";
import Distribute from "./components/Distribute";
import Leader from "./components/Leader";

import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";
import Personalcare from "./components/Products/Personalcare";
import Contact from "./components/Contact";
import Bathroomcare from "./components/Bathroomcare";
import Floorsurface from "./components/Floorsurface";
import Kitchencare from "./components/Kitchencare";
import Generalcare from "./components/Generalcare";


// import Leader from "./components/Leader";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="History/" element={<History />} />
          <Route path="Core/" element={<Core />} />
          <Route path="IT/" element={<IT />} />
          <Route path="Distribute/" element={<Distribute />} />
          <Route path="Leader/" element={<Leader />} />
          <Route path="Personalcare/" element={<Personalcare/>} />
          <Route path="Contact/" element={<Contact/>} />
          <Route path="Generalcare/" element={<Generalcare/>} />
          <Route path="Kitchencare/" element={<Kitchencare/>} />
          <Route path="Floorsurface/" element={<Floorsurface/>} />
          <Route path="Bathroomcare/" element={<Bathroomcare/>} />
       
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
