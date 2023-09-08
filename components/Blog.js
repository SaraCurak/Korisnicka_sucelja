import React, { useState } from 'react';
import {useParams } from 'react-router-dom'; 
import Image from 'next/image'
import Link from 'next/link';

function Blog({ posts }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = posts.filter((post) => {
    const { subject, content, author } = post;
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      subject.toLowerCase().includes(lowerCaseQuery) ||
      content.toLowerCase().includes(lowerCaseQuery) ||
      author.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <div className="box">
    <div className="testimonials-row2">
      <div className="testimonial-container">
          <div className="brushed-title-container-cover">
              <h2 className="brushi">Pet Plus</h2>
          </div>
      </div>
    </div>
    
    <div className="mb-3 blog-search-container">
        <input
          type="text"
          placeholder="Pretraži..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control"
        />
      </div>

      <ul className="list-group">

        {filteredPosts.length == 0 ? "Nema 'Petica' koje odgovaraju pretrazi.": ""}

        {filteredPosts.map((post) => (
          <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center blog-post">
            <Link href={`http://localhost:3000/posts/${post.id}`}
            >
                        
            <div className="col-lg-3 blog-post-image-container">  
              <Image
                src={`/../public/images/posts/${post.id}.jpg`}
                width={500}
                height={500}
                alt={post.subject}
                className="blog-post-image"
              />
            </div>
            <div className="col-lg-7 offset-lg-1 blog-post-content-container">
              <h3 className="mb-0 blog-post-title">{post.subject}</h3>
              <p className="mb-0 blog-post-content">{post.content.slice(0, 140)}{post.content.length > 70 ? '...' : ''}</p>
              <p className="mb-0 blog-post-author">{post.author}</p>           
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

};
  
  export default Blog;
