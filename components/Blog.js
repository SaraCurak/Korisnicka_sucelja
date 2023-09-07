import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 

function Blog({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { postId } = useParams(); 

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Blog</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      {postId && (
        <div>
          {/* Display individual blog post */}
          <h2>{posts[postId - 1].title}</h2>
          <p>{posts[postId - 1].content}</p>
          <img src={posts[postId - 1].image} alt="Blog Post" />
        </div>
      )}
    </div>
  );
}

export default Blog;
