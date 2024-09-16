import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import Bookmark from './Bookmark'

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    const [marks,setMarks] = useState([])

    const handleBlog = (blog) => { 
      const newMarks =[...marks,blog]
      setMarks(newMarks)
     }


    const handleMark = (blog,index) => { 
      
        const newMarks = marks.filter((_, i) => i !== index);
        setMarks(newMarks)
    
     }

    useEffect(() => {  
        fetch("blogs.json")
        .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])
  return (
    <div className='max-w-[1200px] m-auto flex'>
    <hr />
    <div className="flex flex-col justify-start w-2/3">
    <h1 className=' text-red-700 font-bold text-center m-auto w-2/3'>This is Blogs</h1>

    {
      blogs.map(blog =>  
        <Blog key={blog.id} id={blog.id} blog={blog} handleBlog={handleBlog}/> 
      )
    }    
    </div>
    <div className='w-1/2'>
    <h1 className=' text-red-700 font-bold text-center m-auto w-2/3'>This is Bookmarks</h1>
    {
      marks.map((mark,index) => <Bookmark key={mark.id} index={index} blog={mark} handleMark={handleMark} />)
    }

    </div>
    </div>
  )
}

export default Blogs