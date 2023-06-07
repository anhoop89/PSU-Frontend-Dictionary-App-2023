import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Authenication = () => {
  const navigate = useNavigate();
  const { loginWithPopup, logout, isAuthenticated, isLoading, user } =
    useAuth0();

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
          <div
            className="nav-link active"
            id="tab-login"
            href="#login"
            role="tab"
            aria-selected="true"
            onClick={handleLoginClick}
            style={{cursor:"pointer"}}
          >
            Log In
          </div>
        </li>
      ) : (
        <li className="input-group nav-item">
          {isAuthenticated ? (
            <Link className="nav-link" to="/user">
              <strong className="pt-2"
                style={{ color: "#19A7CE"}}
              >Welcome {user.name},&nbsp;
              </strong>
            </Link>
          ) : (
            ""
          )}
          <div
            className="nav-link active"
            id="tab-logout"
            href="#logout"
            role="tab"
            aria-selected="true"
            onClick={handleLogoutClick}
            style={{cursor:"pointer"}}
          >
            Log Out
          </div>
        </li>
      )}
    </>
  );
};

export default Authenication;
