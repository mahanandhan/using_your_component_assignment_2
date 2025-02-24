import React from 'react'
import Likebutton from './likebutton'
const Postcard = ({ initialPosts }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Postcard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialPosts.map((post) => {
          return (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.profileImage}
                alt="profile image"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <p className="text-sm text-gray-500 italic">{post.username}</p>
              <Likebutton />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Postcard
