import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Admin = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="bg-light rounded mx-auto p-3 mt-5 w-50">
      <h1 className="bg-white">List of Users login</h1>
      {isAuthenticated ? (
        <div>
          <p className="readFont mb-5">Logged in as: {user?.nickname}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Admin;
