import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import LandingHome from "./LandingHome";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authStatus) {
      appwriteService.getAllPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
  }, [authStatus]); // Add authStatus to dependency array

  if (!authStatus) {
    return <LandingHome />;
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No posts found. Login to create or view posts.
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-8 bg-[var(--midnight-bg)]">
      <Container>
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-[var(--highlight-cyan)] drop-shadow-lg animate-fade-in-up">
            VibeScribe
          </h1>
          <p className="mt-4 text-xl text-[var(--text-secondary)] animate-fade-in-up delay-100">
            Your modern, animated blog for sharing vibes, stories, and
            inspiration.
          </p>
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
            alt="Blog Hero"
            className="mx-auto mt-8 rounded-2xl shadow-2xl w-full max-w-3xl object-cover animate-fade-in-up delay-200"
          />
        </div>
        {/* Blog Grid */}
        <div className="flex flex-wrap gap-y-8 animate-fade-in-up delay-300">
          {posts.map((post, idx) => (
            <div
              key={post.$id}
              className="p-2 w-full sm:w-1/2 lg:w-1/4 transition-transform duration-300 hover:-translate-y-2"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
