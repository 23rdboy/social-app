"use client";
import { useState } from 'react';

export default function Home() {
    const [likeCount, setLikeCount] = useState(1);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">My Status</h1>
            <p className="text-2xl font-bold">:-D</p>
            <p className="text-2xl">👍 {likeCount}</p>
            <button className="bg-blue-500 text-white" onClick={() => setLikeCount(likeCount + 1)}>
                Like this post
            </button>
        </div>
        //2.26.45
    );
}
