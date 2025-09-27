import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import logo from "../assets/logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  let context;
  try {
    context = useAppContext();
  } catch (e) {
    // Optionally log or handle error
    context = {};
  }
  const { setUser, setToken, setLoading, setError, token, backendUrl } = context;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  // 🔹 Email/password login handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/login`, { email, password });
      if (data.success) {
        setToken(data.token);
        // Fetch user profile with token to ensure fresh data
        const userRes = await axios.get(`${backendUrl}/api/user/profile/${data.user._id}`, {
          headers: { Authorization: `Bearer ${data.token}` }
        });
        setUser(userRes.data.user); // set only the user object
        localStorage.setItem("user", JSON.stringify(userRes.data.user)); // persist user object
        localStorage.setItem("token", data.token);
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed");
        toast.error(data.message || "Invalid email or password. Please try again.");
      }
    } catch (error) {
      const message = error.response?.data?.message || "An error occurred. Please try again.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Google login handler
  const handleGoogleLogin = () => {
    window.location.href = `${backendUrl}/api/auth/google`;
  };

  // 🔹 LinkedIn login handler
  const handleLinkedInLogin = () => {
    window.location.href = `${backendUrl}/api/auth/linkedin`;
  };

  return (
    <div className="bg-[#f5f5fa] min-h-screen py-8 flex flex-col">
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center mt-8 mb-8">
        <img src={logo} alt="logo" className="w-10 h-10 mb-2" />
        <h2 className="font-bold text-4xl mb-4 text-center">Welcome Back!</h2>
        <p className="text-gray-500 text-base mb-5 text-center">
          Log in to your Skill Barter account to continue your journey
        </p>

        {/* Email/password form */}
        <form className="w-full flex flex-col gap-3" onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Email"
            className="rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full rounded-lg py-3 font-semibold text-base mt-1 tracking-wide bg-[#190a64] text-white hover:bg-[#190a54] transition"
          >
            Log In
          </button>
          <div className="flex justify-end w-full mt-2">
            <Link to="#" className="text-[#190a64] text-xs font-medium underline">Forgot Password?</Link>
          </div>
        </form>

        <div className="w-full text-center text-gray-300 text-sm my-2">OR</div>

        {/* Social login buttons */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-white border border-gray-200 rounded-lg py-3 font-semibold text-base mb-2 flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition"
        >
          Log in with Google
        </button>
        <button
          type="button"
          onClick={handleLinkedInLogin}
          className="w-full bg-white border border-gray-200 rounded-lg py-3 font-semibold text-base mb-2 flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition"
        >
          Log in with LinkedIn
        </button>

        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#190a64] font-medium underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;