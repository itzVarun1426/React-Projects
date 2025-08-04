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
    <div className="text-center py-8">Loading...</div>
  ) : post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
