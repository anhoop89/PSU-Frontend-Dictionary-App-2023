import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Authenication = () => {
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
      {!isAuthenticated && !isLoading ? (
        <li className="nav-item">
            <a
              className="nav-link active"
              id="tab-login"
              href="#login"
              role="tab"
              aria-selected="true"
              onClick={handleLoginClick}
            >
              Log In
            </a>
        </li>
      ) : (
        <li className="nav-item">
            <a
              className="nav-link active"
              id="tab-logout"
              href="#logout"
              role="tab"
              aria-selected="true"
              onClick={handleLogoutClick}
            >
              Log Out
            </a>
        </li>
      )}
    </>
  );
};

export default Authenication;