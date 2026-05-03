import { Link, Outlet } from "react-router";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-950/70 border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            <span className="text-blue-500">School</span>ERP
          </Link>

          <div className="hidden md:flex gap-8 items-center text-sm">
            <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition">About</Link>
            <Link to="/plans" className="text-gray-300 hover:text-white transition">Plans</Link>

            <Link
              to="/plans"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium shadow-md hover:scale-105 transition"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-500">School</span>ERP
            </h3>
            <p className="text-gray-400 text-sm">
              AI-powered ERP platform designed for modern educational institutions.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/plans" className="hover:text-white">Plans</Link></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} /> ap2724794@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> +91 7536035890
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 text-center py-6 text-gray-500 text-sm">
          © 2026 SchoolERP. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
