import React from "react";
import { Link } from "react-router-dom";
import {
  FaPenFancy,
  FaRegSmileBeam,
  FaRocket,
  FaFeatherAlt,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPenFancy size={36} className="text-cyan-400" />,
    title: "Write Effortlessly",
    desc: "A beautiful, distraction-free editor for your thoughts and stories.",
  },
  {
    icon: <FaRegSmileBeam size={36} className="text-cyan-400" />,
    title: "Share Instantly",
    desc: "Publish and share your vibe with the world in one click.",
  },
  {
    icon: <FaRocket size={36} className="text-cyan-400" />,
    title: "Inspire Others",
    desc: "Connect, inspire, and grow your audience with every post.",
  },
];

const LandingHome = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white font-sans">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-br from-cyan-400 to-blue-600 text-transparent bg-clip-text drop-shadow-2xl mb-6 animate-fadeIn">
          VibeScribe
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fadeIn delay-200">
          Unlock your voice. Share your world.
        </p>
        <Link to="/signup">
          <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-lg text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 animate-bounce">
            Start Your Journey
          </button>
        </Link>

        {/* Glass circles */}
        <div className="absolute top-1/4 left-1/3 w-60 h-60 bg-blue-500 opacity-30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-400 opacity-20 blur-2xl rounded-full animate-pulse delay-300"></div>
      </section>

      {/* Graphic */}
      <section className="px-4 py-12 flex justify-center items-center">
        <div className="relative w-full max-w-5xl">
          <img
            src="https://images.unsplash.com/photo-1510519138101-570d1dca3d6b?auto=format&fit=crop&w=1200&q=80"
            alt="Creative writing"
            className="rounded-3xl shadow-2xl w-full aspect-video object-cover animate-fadeIn"
          />
          <span className="absolute text-sm text-gray-400 right-4 bottom-4">
            (Replace with custom illustration)
          </span>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeIn"
            style={{ animationDelay: `${i * 150 + 500}ms` }}
          >
            <div className="mb-5 p-4 bg-gray-800 rounded-full">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-white text-center">
              {f.title}
            </h3>
            <p className="text-gray-400 text-center">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* How it Works */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fadeIn">How It Works</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fadeIn delay-200">
          Join in seconds, create your first post in minutes. Grow your
          audience, get feedback, and become a thought leader — one vibe at a
          time.
        </p>
        <Link to="/login">
          <button className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:scale-105 transition-transform shadow-lg animate-fadeIn delay-400">
            Get Started <FaArrowRight />
          </button>
        </Link>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-4 bg-black/80">
        <h2 className="text-4xl font-extrabold text-white mb-6 animate-fadeIn delay-500">
          Ready to Dive In?
        </h2>
        <p className="text-xl text-gray-400 mb-10 animate-fadeIn delay-600">
          Explore inspiring stories and ideas from creators like you.
        </p>
        <Link to="/all-posts">
          <button className="px-10 py-4 bg-gradient-to-br from-purple-500 to-pink-600 text-white font-bold rounded-full shadow-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 animate-bounce">
            Browse All Posts <FaFeatherAlt className="inline-block ml-2" />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default LandingHome;
