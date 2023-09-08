import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import Image from 'next/image'

function Post({ posts }) {
  return (
    <div>
    <div className="testimonials-row2">
      <div className="testimonial-container">
          <div className="brushed-title-container-cover">
              <h2 className="brushi">Pet Plus</h2>
          </div>
      </div>
    </div>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
            <a href={`http://localhost:3000/posts/${post.id}`}>
            <div>
              <h3 className="mb-0">{post.subject}</h3>
              <p className="mb-0">{post.content.slice(0, 70)}{post.content.length > 70 ? '...' : ''}</p>           
            </div>
              <Image
                src={`/../public/images/posts/${post.id}.jpg`}
                width={500}
                height={500}
                alt={post.subject}
                className="blog-post-image"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

};
  
  export default Post;
