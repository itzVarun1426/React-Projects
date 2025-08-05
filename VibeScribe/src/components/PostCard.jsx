import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const imageUrl = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : "";

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
        <div className="w-full justify-center mb-4">
          {imageUrl && (
            <div className="w-full aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-xl shadow-lg border border-blue-900 bg-[#1e2a47]">
              <img
                src={imageUrl}
                alt={title || "Post Image"}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
