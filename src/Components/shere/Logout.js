import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../firebaseInit";

const Logout = () => {
  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("token");
  };
  return (
    <div>
      <button
        onClick={() => handleLogout()}
        className="ml-4 text-black font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
