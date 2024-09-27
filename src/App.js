
import './App.scss';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//components
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
function App() {
  return (<>
 <BrowserRouter>
 <div className='wrap'>
 <Header/>
 <Routes>
  <Route path='/' element={ <Home/>}/>
  <Route path='/About' element={ <About/>}/>
  <Route path='/Projects' element={ <Projects/>}/>
 </Routes>
 <Footer/>
 </div>
 </BrowserRouter>


  </>);
}

export default App;
