import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import AppwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) {
      navigate("/");
      return;
    }

    AppwriteService.getPostBySlug(slug)
      .then((post) => {
        if (post) setPost(post);
        else navigate("/");
      })
      .finally(() => setLoading(false));
  }, [slug, navigate]);

  return loading ? (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="animate-pulse text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Loading...
      </div>
    </div>
  ) : post ? (
    <div className="py-10 bg-black min-h-screen text-white">
      <Container>
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 shadow-lg animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Edit Your Post
          </h1>
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : null;
};

export default EditPost;
