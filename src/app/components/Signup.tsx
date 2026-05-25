import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Phone, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Signup() {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "Base";

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      phone: formData.phone,
      password: formData.password,
      plan: selectedPlan,
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        {/* HEADER */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-extrabold">
            <span className="text-blue-500">School</span>ERP
          </Link>

          <h2 className="text-3xl font-bold mt-4 text-white">
            Create Account
          </h2>

          <p className="text-gray-400">
            Sign up with phone number
          </p>

          <div className="mt-4 inline-block bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300">
            Plan:
            <span className="text-blue-400 ml-2">
              {selectedPlan}
            </span>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* PHONE NUMBER */}
            <div className="relative">
              <Phone
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
                placeholder="Phone Number"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
                placeholder="Password"
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <Lock
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
                placeholder="Confirm Password"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          {/* LOGIN */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

        {/* CHANGE PLAN */}
        <div className="text-center mt-6">
          <Link
            to="/plans"
            className="text-gray-500 hover:text-white"
          >
            ← Change plan
          </Link>
        </div>
      </motion.div>
    </div>
  );
}