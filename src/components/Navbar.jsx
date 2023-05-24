import { Link } from "react-router-dom";
import logo from "../img/logo_test.png";
import '../CSS/navbar.css';

import { Route, Routes, useNavigate } from "react-router-dom";

import HomePage from "../views/homePage";
import ContactPage from "../views/contactPage";
import WordsPage from "../views/WordsPage";
import ThesaurusPage from "../views/ThesaurusPage";
import TranslatePage from "../views/translatePage";
import Admin from "../views/AdminPage";

import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const navigate = useNavigate();

  const { loginWithPopup, logout, isAuthenticated, isLoading } = useAuth0();
  const handleLoginClick = async (event) => {
    event.preventDefault();
    await loginWithPopup();
    navigate("/");
  };

  const handleLogoutClick = (event) => {
    event.preventDefault();
    logout();
  };

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
                <Link className="nav-link" to="/WordsPage">
                  Words
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ThesaurusPage">
                  Thesaurus
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/translatePage">
                  Translate
                </Link>
              </li>

              <li className="nav-item nav-item-last">
                {!isAuthenticated && !isLoading ? (
                  <Link to="/">
                    {/* <button onClick={handleLoginClick} class="nav-link active bg-dark">
                      Log In
                    </button> */}
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="tab-login"
                        href="#login"
                        role="tab"
                        aria-selected="true"
                        onClick={handleLoginClick}
                      >
                        LogIn
                      </a>
                    </li>
                  </Link>
                ) : (
                  <Link to="/">
                    {/* <button onClick={handleLogoutClick}>LogOut</button> */}
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="tab-logout"
                        href="#logout"
                        role="tab"
                        aria-selected="true"
                        onClick={handleLogoutClick}
                      >
                        LogOut
                      </a>
                    </li>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/WordsPage" element={<WordsPage />} />
        <Route path="/ThesaurusPage" element={<ThesaurusPage />} />
        <Route path="/translatePage" element={<TranslatePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default Navbar;
