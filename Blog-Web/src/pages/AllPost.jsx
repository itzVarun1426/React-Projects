import React, { useState, useEffect } from "react";
import { PostCard, Container } from "../components/components";
import appwriteService from "../appwrite/config";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  useEffect(() => {
    appwriteService.listPost([]).then((posts) => {
      if (posts) setPosts(posts.documents);
      setLoading(false); // ✅ Stop loading once done
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {loading ? (
          <div className="text-center w-full py-10 text-gray-500 text-lg">
            ⏳ Loading posts...
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center w-full py-10 text-gray-500 text-lg">
            No posts available.
          </div>
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllPost;
