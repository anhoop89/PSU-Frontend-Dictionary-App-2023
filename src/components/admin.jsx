import { useAuth0 } from "@auth0/auth0-react";

const Admin = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="bg-light rounded mx-auto p-3 mt-5 w-50">
      <h1 className="bg-white text-center mb-3">List of Users login</h1>
      {isAuthenticated ? (
        <div className="whitespace-pre-wrap overflow-x-auto">
          <div className="card">
            <div className="row g-0 m-4">
              <div className="col-md-4 mt-3">
                <img
                  src={user.picture}
                  className="card-img-top rounded-circle"
                  alt="Profile"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    User logged in as: {user.nickname}
                  </h5>
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
export default Admin;