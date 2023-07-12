import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Home/Contact/Contact';
import About from './Components/Home/About/About';
// import Contact from './Components/Contact/Contact';
// import About from './Components/About/About';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route exact path="/"element={<Home/>}/>
      <Route exact path="/about"element={<About/>}/>
      <Route exact path="/contact"element={<Contact/>}/>
    </Routes>
    </BrowserRouter>    
       
  );
}

export default App;
