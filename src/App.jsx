import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer";
import History from "./components/About/History/History.jsx";
import Core from "./components/About/CoreValues/Core.jsx";
import IT from "./components/Innovation/IT.jsx";

import Leader from "./components/About/LeaderShip/Leader.jsx";

import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";
import Personalcare from "./components/Products/Personalcare";
import Contact from "./components/ContactUs/Contact";
import Bathroomcare from "./components/Products/Bathroomcare";
import Floorsurface from "./components/Products/Floorsurface";
import Kitchencare from "./components/Products/Kitchencare.jsx";
import Generalcare from "./components/Products/Generalcare";
import Productdetails from "./components/Productdetails";

import Distribute  from './components/About/Distribute/Distribute.jsx'


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
          <Route path="Distribute/" element={<Distribute/>} />
          <Route path="Leader/" element={<Leader />} />
          <Route path="Personalcare/" element={<Personalcare/>} />
          <Route path="Contact/" element={<Contact/>} />
          <Route path="Generalcare/" element={<Generalcare/>} />
          <Route path="Kitchencare/" element={<Kitchencare/>} />
          <Route path="Floorsurface/" element={<Floorsurface/>} />
          <Route path="Bathroomcare/" element={<Bathroomcare/>} />
          <Route path="Productdetails/" element={<Productdetails/>} />
       
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
