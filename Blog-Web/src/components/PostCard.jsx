import React from "react";
import { Link } from "react-router-dom";
import { Service } from "../appwrite/config";

const service = new Service();

const PostCard = ({ title, featuredImage, $id }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {featuredImage ? (
            <img
              src={service.getFilePreview(featuredImage)}
              alt={title}
              className="mx-auto"
            />
          ) : (
            <p className="text-center text-sm text-gray-500">
              No image available
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
