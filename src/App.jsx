import Navbar from './components/Navbar';
import './App.css';
import IT from './components/IT';
import Counter from './components/Counter';
import Home from './components/Home';
import Client from './components/Client';
import About from './components/About';
import History from './components/History';
import Product from './components/Product';

import Footer from './components/Footer';



function App() {
  return (
    <div>
<Navbar/>
 <Home/>
<Counter/>
<About/>
<Product/>
<Client/>
<Footer/> 
<IT/>
<History/>

    </div>
  );
}

export default App;
