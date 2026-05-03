import { Target, Heart, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    { icon: Users, title: "Accessibility", description: "Empowering institutions of all sizes" },
    { icon: TrendingUp, title: "Innovation", description: "AI-driven solutions for modern education" },
    { icon: Heart, title: "Inclusivity", description: "Designed for every student and educator" }
  ];

  const team = [
    { name: "Amit Patel", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    { name: "Priya Kapoor", role: "CTO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
    { name: "Rahul Sharma", role: "Head of Product", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
    { name: "Sneha Reddy", role: "Lead Developer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" }
  ];

  const metrics = [
    { label: "Schools", value: "500+" },
    { label: "Students", value: "200K+" },
    { label: "States", value: "15+" },
    { label: "Satisfaction", value: "98%" }
  ];

  return (
    <div className="bg-gray-950 text-white">

      {/* HERO */}
      <section className="relative text-center py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Building the Future of Education
        </motion.h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We create premium AI-powered ERP solutions that transform how schools operate.
        </p>
      </section>

      {/* VISION + IMAGE */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-blue-400" />
            <h2 className="text-3xl font-bold">Vision</h2>
          </div>
          <p className="text-gray-400 mb-8">
            To digitize and simplify education management across India using intelligent systems.
          </p>

          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-blue-400" />
            <h2 className="text-3xl font-bold">Mission</h2>
          </div>
          <p className="text-gray-400">
            Deliver scalable, affordable, and intuitive ERP solutions that improve outcomes for everyone.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800"
          className="rounded-3xl shadow-2xl border border-gray-800"
        />
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Core Values</h2>
          <p className="text-gray-400">Principles that define us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center"
            >
              <v.icon className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-gray-900 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-blue-400">{m.value}</div>
              <div className="text-gray-500">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Team</h2>
          <p className="text-gray-400">Driven by passion & innovation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
            >
              <img src={m.image} className="h-64 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-blue-400 text-sm">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24">
        <h2 className="text-4xl font-bold mb-6">Be Part of the Change</h2>
        <p className="text-gray-400 mb-8">Join us in transforming education</p>

        <a
          href="#contact"
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
