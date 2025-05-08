"use client";
import { useState } from "react";

const Post = ({ name, statusText, initialLikeCount }) => {
  const [likeCount, setLikeCount] = useState(initialLikeCount || 0);

  return (
    <div className="flex flex-col gap-4 p-2 bg-gray-300">
      <h2 className="text-green-700">{name}</h2>
      <p className="text-2xl font-bold">{statusText}</p>
      <p className="text-2xl">👍 {likeCount}</p>
      <button
        className="bg-green-500 text-white w-28"
        onClick={() => setLikeCount(likeCount + 1)}
      >
        I like this post
      </button>
    </div>
  );
};

export default Post;
