import React from "react";
import { PostForm, Container } from "../components/index";

const AddPost = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-25 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6 text-center sm:text-left">
            Add New Post
          </h1>
          <PostForm />
        </div>
      </Container>
    </div>
  );
};

export default AddPost;
