import React from "react";

const Blog = ({ blog ,handleBlog}) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  const date = new Date(posted_date)

  const opt = {month: 'short', day: 'numeric'}

  return (
    <>
      <div className="blog-card p-6">
        <img src={cover} alt="" className="w-full  mb-6 max-h-[500px]" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div>
              <img src={author_img} className="w-20" alt="" />
            </div>
            <div>
              <h5 className="font-bold">{author}</h5>
              <p>{date.toLocaleDateString('en-US',opt)}</p>
            </div>
          </div>
          <div>
            <p>{reading_time} min read</p>
          </div>
        </div>
        <h1 className="block lg:h-auto p-6">{title}</h1>
          {hashtags.map((hashtag,idx) => <span key={idx}> #{hashtag}</span>)}
          <br />
          <button className="underline cursor-pointer" onClick={() => { handleBlog(blog) }}>Mark as Read</button>
      </div>
    </>
  );
};

export default Blog;
