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
    <div className="py-8">
      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : posts.length > 0 ? (
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div
                className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                key={post.$id}
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div className="text-center text-gray-500">No posts found.</div>
      )}
    </div>
  );
};

export default AllPosts;
