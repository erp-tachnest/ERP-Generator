import { Link } from "react-router";
import {
  Users,
  Calendar,
  ClipboardList,
  GraduationCap,
  DollarSign,
  MessageSquare,
  BarChart3,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    { icon: Users, title: "Student Management", description: "Comprehensive student profiles and lifecycle management" },
    { icon: Calendar, title: "Attendance Tracking", description: "Real-time attendance with smart insights" },
    { icon: ClipboardList, title: "Timetable", description: "AI-powered scheduling & optimization" },
    { icon: GraduationCap, title: "Exam System", description: "Seamless exams & grading workflows" },
    { icon: DollarSign, title: "Fee Management", description: "Automated billing, receipts & tracking" },
    { icon: MessageSquare, title: "Communication", description: "Unified parent-teacher communication hub" },
    { icon: BarChart3, title: "Analytics", description: "Actionable insights & performance dashboards" },
    { icon: CheckCircle, title: "NEP 2020", description: "Fully compliant & future-ready system" }
  ];

  return (
    <div className="bg-gray-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-700/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            AI-Powered School ERP
            <span className="block text-blue-400">Redefined for Excellence</span>
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Premium, intelligent, and beautifully designed ERP system built for modern institutions.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <Link to="/plans" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold shadow-lg transition">
              Start Free Trial
            </Link>
            <Link to="/plans" className="px-8 py-4 border border-gray-500 hover:border-white rounded-xl font-semibold transition">
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Premium Features</h2>
          <p className="text-gray-400">Everything you need. Nothing you don't.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition shadow-lg"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/20 mb-4">
                <feature.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Trusted by Educators</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-gray-950 border border-gray-800 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-400 italic mb-6">
                  "This ERP completely transformed our workflow and efficiency."
                </p>
                <div className="font-semibold">School Leader</div>
                <div className="text-sm text-gray-500">India</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Upgrade Your Institution Today</h2>
        <p className="text-gray-400 mb-10">Experience the next generation ERP platform.</p>

        <Link
          to="/plans"
          className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-lg font-semibold shadow-xl hover:scale-105 transition"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}
