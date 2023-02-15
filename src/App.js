import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home.js';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path ='/' element ={<Home />} />
          <Route path ='/About' element = {<About/>} />
          <Route path = '/projects' element = {<Projects/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
