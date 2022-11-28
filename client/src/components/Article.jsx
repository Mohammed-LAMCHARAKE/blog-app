import MDEditor from '@uiw/react-md-editor'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import postService from '../services/postService'
import Comment from './Comment'
import TextArea from './TextArea'

function Article(props) {
  const [article, setArticle] = useState({})
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  const { id } = useParams()

  async function sendComment() {
    try {
      let { data } = await postService.commentOnPost(id, comment)
      toast(data)
    } catch (ex) {
      toast.error(ex.message)
    }
  }

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data } = await postService.getPost(id)
        setArticle(data)
      } catch (ex) {}
    }
    async function seeComments(id) {
      let { data } = await postService.getPostComments(id)
      if (data.length == 0) return
      setComments(data)
    }

    fetchPost()
    seeComments(id)
  }, [])

  return (
    <section className='dark:bg-gray-800 py-4 rounded-xl'>
      <div className='m-8 py-8 lg:py-1 px-4 mx-auto max-w-screen-lg rounded-xl shadow-lg'>
        <div className='w-full mb-8 '>
          <img
            src={
              article.image ||
              'https://www.professionnels.ma/sites/default/files/inline-images/iphone-14-design.jpeg'
            }
            className='rounded-2xl shadow-2xl'
          />
        </div>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-violet-700 dark:text-white'>
          {article.title}
        </h2>
        <h2>
          <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
            <img
              className='mr-4 w-14 h-14 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
            />
            <div>
              <p
                rel='author'
                className='text-sm font-bold text-gray-900 dark:text-white'>
                Posted By :{' '}
                {`${article.postedBy?.firstName} ${article.postedBy?.lastName}`}
              </p>
              <p className='text-base font-light text-gray-500 dark:text-gray-400'>
                <time pubdate datetime='2022-02-08' title='February 8th, 2022'>
                  {new Date(article.createdAt).toLocaleDateString()}
                </time>
              </p>
            </div>
          </div>
        </h2>
        <div className='text-justify'>
          <MDEditor.Markdown source={article.content} />
        </div>

        {/* <TextArea label='Leave a comment' /> */}
        <form>
          <div className='pt-8'>
            <label htmlFor=''>Leave a comment</label>
            <MDEditor value={comment} onChange={setComment} />
          </div>
          <button className='w-full my-6 py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-violet-700 sm:w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-purple-800'>
            Post Comment
          </button>
        </form>

        {comments.length > 0 && (
          <h3 className='text-purple-800 text-2xl mb-3'>Comments</h3>
        )}
        {comments.map((comment, idx) => (
          <Comment key={idx} />
        ))}
      </div>
    </section>
  )
}

export default Article
