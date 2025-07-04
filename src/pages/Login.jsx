import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../components/Context/Authprovider";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    signIn(email, password)
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => {
        setError("Failed to login: " + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleGoogleSignIn() {
    setError("");
    setGoogleLoading(true);

    signInWithGoogle()
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => {
        setError("Failed to sign in with Google: " + err.message);
      })
      .finally(() => {
        setGoogleLoading(false);
      });
  }

  return (
    <div className="max-w-md mx-auto mt-6 mb-10">
      <div className="bg-transparent text-black p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            type="button"
            className="btn flex items-center justify-center gap-2 bg-white text-black border border-gray-300 w-full py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
          >
            <FcGoogle className="text-2xl" />
            <span>{googleLoading ? "Signing in..." : "Log in with Google"}</span>
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}