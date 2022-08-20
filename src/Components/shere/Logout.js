import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../firebaseInit";

const Logout = () => {
  return (
    <div>
      <button onClick={() => signOut(auth)} className="ml-4 text-white">
        Logout
      </button>
    </div>
  );
};

export default Logout;