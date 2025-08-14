import React, { useState, useEffect } from "react";
import AppwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AppwriteService.getAllPosts()
      .then((posts) => {
        if (posts) setPosts(posts.documents);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full min-h-screen py-25 bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
      <Container>
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-center mb-10">
          All Posts
        </h1>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-lg text-gray-300 animate-pulse">
            Loading...
          </div>
        ) : posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <div
                key={post.$id}
                className="p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">No posts found.</div>
        )}
      </Container>
    </div>
  );
};

export default AllPosts;
