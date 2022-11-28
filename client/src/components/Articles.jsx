import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'
import postService from '../services/postService'

function Articles(props) {
  const [articles, setArticles] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchPosts() {
      try {
        let { data } = await postService.getPosts()
        setArticles(data)
      } catch (ex) {
        console.log(ex)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className='mx-auto px-4 py-4'>
      <h2 className='mb-2 text-5xl text-center font-extrabold leading-tight text-purple-700'>
        ARTICLES
      </h2>
      <div className='grid grid-cols-1 gap-5 justify-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'>
        {articles.map(
          (post, idx) =>
            post.title
              .toLowerCase()
              .includes(searchQuery.toLocaleLowerCase()) && (
              <PostCard key={idx} post={post} />
            )
        )}
      </div>
    </section>
  )
}

export default Articles
