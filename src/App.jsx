import "./CSS/App.css";
import logo from "../src/img/logo_test.png"
import Home from './components/home';
import Contact from './components/contact';
import Game from './components/game';
import {Link, Route, Routes} from 'react-router-dom';


function Navbar() {
  return (
    // this is a navbar where has all the tabs. Each tab is a component. 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/"> 
        <img src={logo} width="45" height="30" className="d-inline-block align-top" alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" exact to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/game">Game</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navbar />

      {/* Routes:  to define the different paths or URLs of a web application and map them 
      to specific components that are responsible for rendering the content of that page */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}
export default App;
