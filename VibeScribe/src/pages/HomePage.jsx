import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import LandingHome from "./LandingHome";
import { Handshake } from "lucide-react";
import { Link } from "react-router-dom";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (authStatus) {
      appwriteService.getAllPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
  }, [authStatus]);

  if (!authStatus) {
    return <LandingHome />;
  }

  return (
    <div className="w-full min-h-screen py-30 bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
      <Container>
        {/* Welcome Section */}
        <div className="mb-12 text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-lg flex justify-center items-center gap-2">
            Welcome back{user?.name ? `, ${user.name}` : ""}
            <Handshake />
          </h1>
          <p className="mt-3 text-gray-300 text-lg">
            Here’s what’s happening in your space today.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 sm:grid-cols-3 mb-12 animate-fade-in-up delay-100">
          <Link
            to="/add-post"
            className="glass-card p-6 rounded-xl hover:scale-105 transition-transform block"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              ➕ Create Post
            </h3>
            <p className="text-gray-400 text-sm">
              Share your latest thoughts and vibes.
            </p>
          </Link>

          <Link
            to="/my-posts"
            className="glass-card p-6 rounded-xl hover:scale-105 transition-transform block"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              📄 My Posts
            </h3>
            <p className="text-gray-400 text-sm">
              View and manage your contributions.
            </p>
          </Link>

          <Link
            to="/profile"
            className="glass-card p-6 rounded-xl hover:scale-105 transition-transform block"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              ⚙️ Profile
            </h3>
            <p className="text-gray-400 text-sm">
              Update your details and settings.
            </p>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-3 mb-12 animate-fade-in-up delay-200">
          <div className="glass-card p-6 rounded-xl text-center">
            <h4 className="text-gray-400 text-sm">Total Posts</h4>
            <p className="text-3xl font-bold text-cyan-300">{posts.length}</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <h4 className="text-gray-400 text-sm">This Week</h4>
            <p className="text-3xl font-bold text-cyan-300">
              {posts.slice(0, 3).length}
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <h4 className="text-gray-400 text-sm">Following</h4>
            <p className="text-3xl font-bold text-cyan-300">12</p>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="animate-fade-in-up delay-300">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-300">
            Recent Posts
          </h2>
          {posts.length === 0 ? (
            <p className="text-gray-400">
              No posts yet. Start by creating one!
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {posts.map((post) => (
                <div
                  key={post.$id}
                  className="transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>

      {/* Glassmorphism & Animations */}
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}

export default HomePage;
