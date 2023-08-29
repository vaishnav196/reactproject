import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home'
import Footer from './components/Footer';
import History from './components/History';
import Core from './components/Core';
import IT from './components/IT';
import Distribute from './components/Distribute';
import {   BrowserRouter as Routes, Route, Router } from "react-router-dom";

import Leader from "./components/Leader";



function App() {
  return (
    <div>


<Router>
<Navbar/>

  <Routes>
     <Route  path='/' element={< Home />}></Route>
     <Route  path='History/' element={< History/>}></Route>
     <Route path='Core/' element={< Core/>}></Route>
     <Route path='Distribute/' element={<Distribute/>}></Route>
     <Route  path='IT/' element={< IT/>}></Route>
     <Route  path='History/' element={< History/>}></Route>
     <Route  path='Leader/' element={< Leader/>}></Route>
    
  </Routes>
  <Footer/>
</Router>





    </div>
  );
}

export default App;
