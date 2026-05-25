import { Link } from "react-router";
import {
  Moon,
  User,
  Mail,
  Phone,
  Plus,
  Pencil,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const school = {
    id: "SCHOOL-1234-0001",
    name: "Demo School",
    affiliation: "234",
    board: "CBSE",
    medium: "English",
    type: "Private",
    established: "2005",
    phone: "7536035890",
    email: "school@gmail.com",
    address: "Bareilly, Uttar Pradesh, India - 243001",
  };

  return (
    <div className="min-h-screen bg-[#081120] text-white overflow-hidden">
      
      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-indigo-600/10 blur-3xl" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a1628]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-cyan-400">
                School
              </span>
              Connect
            </h1>

            <p className="text-xs text-gray-400">
              School Management Dashboard
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
              <Moon size={18} />
            </button>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full">
              <User size={18} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-5 py-8">

        {/* SCHOOL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {school.name}
            </h2>

            <p className="text-gray-400 mt-2">
              School ID: {school.id}
            </p>

            <button className="mt-6 w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-indigo-500 hover:scale-[1.02] transition">
              🚀 Login ERP
            </button>
          </div>
        </motion.div>

        {/* DASHBOARD OVERVIEW */}
        <div className="mt-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">

          {/* TITLE + EDIT BUTTON */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              📊 Dashboard Overview
            </h3>

            <Link
              to="/edit-school"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition"
            >
              <Pencil size={16} />
              Edit
            </Link>
          </div>

          {/* OVERVIEW CARDS */}
          <div className="grid md:grid-cols-3 gap-5">
            <Card title="School ID" value={school.id} />
            <Card title="School Name" value={school.name} />
            <Card title="Affiliation No." value={school.affiliation} />

            <Card title="Board" value={school.board} />
            <Card title="Medium" value={school.medium} />
            <Card title="Type" value={school.type} />

            <Card title="Established" value={school.established} />
            <Card title="Phone" value={school.phone} />
            <Card title="Email" value={school.email} />

            <Card
              title="Address"
              value={school.address}
              className="md:col-span-2"
            />
          </div>
        </div>

        {/* STAFF MANAGEMENT */}
        <div className="mt-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6">
          <h3 className="text-2xl font-bold mb-5">
            👨‍🏫 Staff Management
          </h3>

          <div className="overflow-auto rounded-xl border border-white/10">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr className="text-left text-gray-300">
                  <th className="p-4">Name</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-white/10">
                  <td className="p-4 text-gray-400">
                    No staff added
                  </td>

                  <td className="p-4">—</td>
                  <td className="p-4">—</td>

                  <td className="p-4 flex gap-3">
                    <button className="text-cyan-400 hover:text-cyan-300">
                      Edit
                    </button>

                    <button className="text-red-400 hover:text-red-300">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="mt-5 bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition">
            <Plus size={18} />
            Add Admin User
          </button>
        </div>
      </div>

      {/* FLOAT BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <button className="w-14 h-14 rounded-full bg-cyan-500 shadow-lg hover:scale-110 transition">
          ⚙️
        </button>

        <button className="w-14 h-14 rounded-full bg-pink-500 shadow-lg hover:scale-110 transition">
          💬
        </button>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-white/10 bg-[#0a1628]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              SchoolConnect
            </h2>

            <p className="text-gray-400 mt-3">
              Empowering students, educators,
              and schools together.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>About Us</p>
              <p>Careers</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p className="flex gap-2">
                <Mail size={18} />
                school@gmail.com
              </p>

              <p className="flex gap-2">
                <Phone size={18} />
                +91 7536035890
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({
  title,
  value,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white/10 border border-white/10 rounded-2xl p-5 ${className}`}
    >
      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h4 className="text-cyan-400 text-xl font-semibold mt-2 break-words">
        {value}
      </h4>
    </motion.div>
  );
}