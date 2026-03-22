import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
const Loginform = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    const userData = {
      name: "User",
      email: "user@gmail.com",
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/"); // go to homepage
  };
  return (
    <div className="w-full min-h-screen bg-linear-to-b from-[#f8e2e2] to-[#ffe4e4] flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#FFB2B2] rounded-full mx-auto mb-4 flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Login to shop</h2>
          <p className="text-gray-500 mt-1">
            Welcome back! Please enter your details
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB2B2] focus:border-transparent"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgotpassword"
              className="text-sm text-[#FFB2B2] hover:text-[#ff8a8a]"
            >
              Forgot password?
            </Link>
          </div>
          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#FFB2B2] text-white py-3 rounded-lg font-semibold hover:bg-[#ff9b9b] transition-colors"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#FFB2B2] font-semibold hover:text-[#ff9b9b]"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Loginform;
