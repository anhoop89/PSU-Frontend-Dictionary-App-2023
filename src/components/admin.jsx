import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Admin = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="container mx-auto px-4 mt-10  mb-40">
      <h1>admin page</h1>
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
