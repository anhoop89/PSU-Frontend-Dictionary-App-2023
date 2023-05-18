import { Link } from 'react-router-dom';
import logo from '../img/logo_test.png';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../views/homePage';
import ContactPage from '../views/contactPage';
import DefinePage from '../views/definePage';
import ThesaurusPage from '../views/thesaurusPage';
import TranslatePage from '../views/translatePage';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid text-light">
          <Link className="navbar-brand" to="/">
            <img
              className="d-inline-block align-top"
              alt="icon-logo"
              src={logo}
              width="45"
              height="30"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/define">
                  Define
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/thesaurus">
                  Thesaurus
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/translate">
                  Translate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/define" element={<DefinePage />} />
        <Route path="/thesaurus" element={<ThesaurusPage />} />
        <Route path="/translate" element={<TranslatePage />} />
      </Routes>
    </>
  );
};

export default Navbar;
