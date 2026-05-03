import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Mail, Lock, User, Building, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Signup() {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "Base";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    schoolName: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return;
    console.log({ ...formData, plan: selectedPlan });
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-2xl"
      >

        {/* HEADER */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-extrabold">
            <span className="text-blue-500">School</span>ERP
          </Link>
          <h2 className="text-3xl font-bold mt-4">Create Account</h2>
          <p className="text-gray-300">Start your journey with us</p>

          <div className="mt-4 inline-block bg-gray-800 border border-gray-600 px-4 py-2 rounded-full text-sm">
            Plan: <span className="text-blue-300">{selectedPlan}</span>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-4">
              <Input icon={User} placeholder="Full Name" value={formData.fullName} onChange={(v)=>setFormData({...formData, fullName:v})}/>
              <Input icon={Mail} placeholder="Email" value={formData.email} onChange={(v)=>setFormData({...formData, email:v})}/>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input icon={Phone} placeholder="Phone" value={formData.phone} onChange={(v)=>setFormData({...formData, phone:v})}/>
              <Input icon={Building} placeholder="School Name" value={formData.schoolName} onChange={(v)=>setFormData({...formData, schoolName:v})}/>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input type="password" icon={Lock} placeholder="Password" value={formData.password} onChange={(v)=>setFormData({...formData, password:v})}/>
              <Input type="password" icon={Lock} placeholder="Confirm Password" value={formData.confirmPassword} onChange={(v)=>setFormData({...formData, confirmPassword:v})}/>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition">
              Create Account <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-gray-300 text-sm mt-6">
            Already have an account? <Link to="/login" className="text-blue-300">Login</Link>
          </p>
        </div>

        <div className="text-center mt-6">
          <Link to="/plans" className="text-gray-400 hover:text-gray-100">← Change plan</Link>
        </div>
      </motion.div>
    </div>
  );
}

function Input({ icon: Icon, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-3 text-gray-400" size={18} />
      <input
        type={type}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
