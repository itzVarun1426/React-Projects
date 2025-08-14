import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.user.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPostBySlug(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    if (post) {
      appwriteService.deletePost(post.$id).then((status) => {
        if (status) {
          appwriteService.deleteFile(post.featuredImage);
          navigate("/");
        }
      });
    }
  };

  return post ? (
    <div className="py-10 bg-black min-h-screen text-white font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Post details */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text drop-shadow-lg animate-fadeIn">
              {post.title}
            </h1>

            <div className="text-gray-300 leading-relaxed animate-fadeIn delay-200 browser-css">
              {parse(post.content)}
            </div>

            {isAuthor && (
              <div className="flex gap-3 animate-fadeIn delay-300">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor="bg-green-500"
                    className="hover:scale-105 transition-transform"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-500"
                  onClick={deletePost}
                  className="hover:scale-105 transition-transform"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-md border border-white/10 animate-fadeIn delay-100">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
