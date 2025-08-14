import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const imageUrl = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : "";

  return (
    <Link to={`/post/${$id}`}>
      <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] bg-white/5 border border-white/10 backdrop-blur-md">
        {/* Image */}
        {imageUrl && (
          <div className="relative w-full overflow-hidden aspect-[16/9]">
            <img
              src={imageUrl}
              alt={title || "Post Image"}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h2 className="text-lg sm:text-xl font-semibold text-white truncate">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
