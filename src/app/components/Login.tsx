import { useState } from "react";
import { Link } from "react-router";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >

        {/* LOGO */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-extrabold">
            <span className="text-blue-500">School</span>ERP
          </Link>
          <h2 className="text-3xl font-bold mt-4">Welcome Back</h2>
          <p className="text-gray-400">Login to your dashboard</p>
        </div>

        {/* CARD */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="you@school.com"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-400">Password</label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* OPTIONS */}
            <div className="flex justify-between text-sm text-gray-400">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" /> Remember
              </label>
              <a href="#" className="hover:text-white">Forgot?</a>
            </div>

            {/* BUTTON */}
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          {/* DIVIDER */}
          <div className="my-6 text-center text-gray-500 text-sm">or continue with</div>

          {/* SOCIAL */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-800 border border-gray-700 py-2 rounded-lg hover:bg-gray-700">Google</button>
            <button className="bg-gray-800 border border-gray-700 py-2 rounded-lg hover:bg-gray-700">Facebook</button>
          </div>

          {/* SIGNUP */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
          </p>
        </div>

        {/* BACK */}
        <div className="text-center mt-6">
          <Link to="/" className="text-gray-500 hover:text-white">← Back to home</Link>
        </div>
      </motion.div>
    </div>
  );
}
