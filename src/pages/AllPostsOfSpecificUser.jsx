import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const AllPostsOfSpecificUser = () => {
 const [posts, setPosts] = useState([]);
 const params = useParams();

 console.log("params ", params);
 
 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        // console.log(posts);
        const filteredPost = posts.filter(post => post.userId == params.userId)
        console.log(filteredPost);
        setPosts(filteredPost)
      })
 }, [])

  return (
    <div>
      All Posts Of User Id = {params.userId}
      {posts.map(post => (
      <div className='bg-amber-400  border-2 border-amber-800 rounded-md mb-2 p-4'>
        <p className='text-white font-bold'>{post.title}</p>
        <p className='text-cyan-950'>{post.body}</p>
      </div>
      ))}
    </div>
  )
}

export default AllPostsOfSpecificUser
