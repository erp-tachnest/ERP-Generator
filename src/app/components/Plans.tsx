import { useState } from "react";
import { useNavigate } from "react-router";
import { Check, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Plans() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState("yearly");

  const plans = [
    {
      name: "Base",
      price: { monthly: 0, yearly: 0 },
      description: "For small schools getting started",
      features: ["Student management", "Attendance", "Timetable", "100 students", "Email support"],
      highlighted: false
    },
    {
      name: "Basic",
      price: { monthly: 499, yearly: 5000 },
      description: "For growing schools",
      features: ["Everything in Base", "Exams & reports", "500 students", "Priority support"],
      highlighted: false
    },
    {
      name: "Standard",
      price: { monthly: 999, yearly: 10000 },
      description: "Most popular plan",
      features: ["Everything in Basic", "Fees & communication", "1500 students", "SMS alerts"],
      highlighted: true
    },
    {
      name: "Premium",
      price: { monthly: 1999, yearly: 20000 },
      description: "For large institutions",
      features: ["Everything in Standard", "Analytics", "API access", "Unlimited students", "24/7 support"],
      highlighted: false
    }
  ];

  const faqs = [
    { q: "Billing?", a: "Monthly or yearly. Yearly saves more." },
    { q: "Cancel anytime?", a: "Yes, no lock-in." },
    { q: "Free plan?", a: "Base plan is free forever." },
    { q: "Payments?", a: "Cards, UPI, net banking." }
  ];

  return (
    <div className="bg-gray-950 text-white">

      {/* HERO */}
      <section className="text-center py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 blur-3xl" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Simple Pricing</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Choose a plan that scales with your institution</p>
      </section>

      {/* TOGGLE */}
      <div className="flex justify-center mb-16">
        <div className="bg-gray-900 border border-gray-800 rounded-full p-1 flex">
          {["monthly", "yearly"].map((type) => (
            <button
              key={type}
              onClick={() => setBillingCycle(type)}
              className={`px-6 py-2 rounded-full text-sm capitalize ${billingCycle === type ? "bg-blue-600" : "text-gray-400"}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* PLANS */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-24">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl p-6 border ${plan.highlighted ? "border-blue-500 bg-gray-900" : "border-gray-800 bg-gray-900"}`}
          >
            {plan.highlighted && <div className="text-blue-400 text-sm mb-2">Most Popular</div>}

            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

            <div className="text-4xl font-bold mb-6">
              ₹{plan.price[billingCycle].toLocaleString("en-IN")}
              {plan.price[billingCycle] !== 0 && (
                <span className="text-sm text-gray-500">/{billingCycle}</span>
              )}
            </div>

            <ul className="space-y-2 mb-6 text-sm text-gray-300">
              {plan.features.map((f, j) => (
                <li key={j} className="flex gap-2 items-center">
                  <Check size={16} className="text-green-400" /> {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate(`/signup?plan=${plan.name}`)}
              className={`w-full py-2 rounded-lg ${plan.highlighted ? "bg-blue-600" : "bg-gray-800"}`}
            >
              Choose Plan
            </button>
          </motion.div>
        ))}
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
              <div className="flex gap-3">
                <HelpCircle className="text-blue-400" />
                <div>
                  <h3 className="font-semibold">{f.q}</h3>
                  <p className="text-gray-400 text-sm">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-24">
        <h2 className="text-4xl font-bold mb-4">Need help deciding?</h2>
        <p className="text-gray-400 mb-6">Talk to our team for guidance</p>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
          Contact Sales
        </button>
      </section>

    </div>
  );
}
