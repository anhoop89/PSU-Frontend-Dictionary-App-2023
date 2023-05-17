import { Route, Routes} from 'react-router-dom';
import "./CSS/App.css";

import Navbar from './components/Navbar';
import Home from './components/home';
import WordsAPI from './api/WordsAPI';
import Contact from './components/contact';
import Game from './components/game';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/api/WordsAPI" element={<WordsAPI/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/game" element={<Game/>}/>
    </Routes>
    </>
  );
}

export default App;
