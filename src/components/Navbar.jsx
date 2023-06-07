import { Link } from 'react-router-dom';
import logo from '../img/logo-book.png';
import '../CSS/navbar.css';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import ContactPage from '../views/contactPage';
import WordsPage from '../views/WordsPage';
import ThesaurusPage from '../views/ThesaurusPage';
import TranslatePage from '../views/translatePage';
import UserPage from '../views/UserPage';
import Authenication from '../components/Authentication';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispearMenu = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dispearMenu.current && !dispearMenu.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid text-light">
        <img
              className="d-inline-block align-top mr-2"
              alt="icon-logo"
              src={logo}
              width="47"
              height="33"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-between Larger shadow ${
              isOpen ? 'show' : ''
            }`}
            ref={dispearMenu}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Dictionary
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
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              {/* login logout for an user */}
              <Authenication />
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<WordsPage />} />
        <Route path="/thesaurus" element={<ThesaurusPage />} />
        <Route path="/translate" element={<TranslatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default Navbar;
