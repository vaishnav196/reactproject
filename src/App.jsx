import Navbar from './Navbar';
import './App.css';
import Counter from './components/Counter';
import Home from './components/Home';
import Client from './components/Client';
import About from './components/About';


import Footer from './components/Footer';



function App() {
  return (
    <div>
<Navbar/>
<Home/>
<Counter/>
<About/>
<Client/>
<Footer/>
    </div>
  );
}

export default App;
