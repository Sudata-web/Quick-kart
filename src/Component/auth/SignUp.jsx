import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "https://quickcart-backend-1-ns7p.onrender.com/api/auth/register",
        { name, email, password }
      );

      toast.success("Registration successful!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        "Registration failed. Please try again.";

      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        
        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg">
            Q
          </span>
          <h1 className="ml-2 text-2xl font-extrabold text-slate-900">
            Quick<span className="text-slate-900">Cart</span>
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-slate-800 mb-2">
          Create your account ✨
        </h2>
        <p className="text-center text-slate-500 mb-8">
          Join QuickCart and start shopping smarter
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-md border border-slate-300 pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3.5 text-slate-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border border-slate-300 pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3.5 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border border-slate-300 pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-md transition disabled:bg-orange-300"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="my-6 border-t border-slate-200"></div>

        {/* Already have account */}
        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 font-medium hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;