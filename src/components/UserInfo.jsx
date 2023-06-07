// my goal is to pull all the users who logged in from autho by their API 
// still not working yet.
import { useAuth0 } from "@auth0/auth0-react";

const User = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="bg-light rounded mx-auto p-3 mt-5 w-50">
      <h1 className="text-center mb-3">Who logged in?</h1>
      {isAuthenticated ? (
        <div className="whitespace-pre-wrap overflow-x-auto">
          <div className="card shadow-sm">
            <div className="row g-0 m-4">
              <div className="col-md-4 mt-3">
                <img
                  src={user.picture}
                  className="card-img-top rounded-circle shadow-sm"
                  alt="Profile"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title h5">
                    <strong>User logged in as:</strong> {user.nickname}
                  </p>
                  <p className="card-text">Name: {user.name}</p>
                  <p className="card-text">Email: {user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default User;