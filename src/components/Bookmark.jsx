import React from "react";

const Bookmark = ({ blog, handleMark, index }) => {
  console.log(blog);
  return (
    <div className="bg-indigo-400 my-2 border-2 rounded-lg p-2 relative">
      <h1 className="font-semibold pr-6">{blog.title}</h1>
      <button
        className="absolute top-[20%] right-2 font-extrabold text-red-600 hover:border-3 hover:border-black"
        onClick={() => {
          handleMark(blog, index);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Bookmark;
