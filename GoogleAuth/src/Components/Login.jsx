import React from "react";
import GoogleButton from "react-google-button";
import { auth, provider } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [user] = useAuthState(auth);

  // ✅ Google Sign In
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log("Google Access Token:", token);

        const user = result.user;
        console.log("Logged in user:", user);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  // ✅ Logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!user ? (
        <>
          <h2 className="text-2xl font-bold mb-6">Login with Google</h2>
          <GoogleButton onClick={handleLogin} />
        </>
      ) : (
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">
            Welcome, {user.displayName}
          </h2>

          <p className="text-gray-600">{user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
