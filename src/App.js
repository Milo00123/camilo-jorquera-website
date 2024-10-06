
import './App.scss';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//components
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
function App() {
  return (<>
 <BrowserRouter>

 <Header/>
 <Routes>
  <Route path='/' element={ <Home/>}/>
  <Route path='/About' element={ <About/>}/>
  <Route path='/Projects' element={ <Projects/>}/>
  <Route path='/Contact' element={ <Contact/>}/>
 </Routes>
 <Footer/>

 </BrowserRouter>


  </>);
}

export default App;
