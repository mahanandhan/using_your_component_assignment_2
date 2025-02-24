import React, { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { SlLike } from 'react-icons/sl';

const LikeButton = () => {
  const [liked, setLiked] = useState(false); // State to track if liked or not

  // Toggle the like state when the icon is clicked
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={toggleLike} className="cursor-pointer">
      {liked ? (
        <SlLike className="text-2xl text-blue-500" /> // Blue when liked
      ) : (
        <BiLike className="text-2xl text-red-500 " /> 
      )}
    </div>
  );
};

export default LikeButton;
