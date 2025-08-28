import React, { useState, useEffect } from "react";
import { auth, loginWithGoogle, logout } from "../firebase";

export default function Login({ setUser }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="flex items-center gap-3 rounded-xl shadow-md p-2">
      {currentUser ? (
        <div className="flex items-center gap-3">
          
          <span className="font-semibold text-white">{currentUser.displayName}</span>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors duration-300 shadow hover:shadow-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={loginWithGoogle}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1"
        >
          Login
        </button>
      )}
    </div>
  );
}
