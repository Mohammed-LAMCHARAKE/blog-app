import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import InputField from './InputField'
import DropDown from './DropDown'
import MDEditor from '@uiw/react-md-editor'
import CheckBox from './CheckBox'
import FileInput from './FileInput'
import postService from '../services/postService'
import categoryService from '../services/categoryService'
import { toast } from 'react-toastify'

function PostForm(props) {
  const [post, setPost] = useState({
    image: '',
    title: '',
    content: '',
    category: '',
    isPrivate: false
  })

  const [errors, setErrors] = useState(null)

  const imagePreview = useRef()
  const { pathname } = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()
  const [categoriesList, setCategoriesList] = useState([])

  //////////////////////////////////////////////
  async function handleSubmit(ev) {
    try {
      ev.preventDefault()
      const formData = new FormData()
      post.image instanceof Blob && formData.append('image', post.image)
      formData.append('title', post.title)
      formData.append('content', post.content)
      formData.append('category', post.category)
      formData.append('isPrivate', post.isPrivate)
      let { data } = await postService.addPost(formData)
      console.log(data)
    } catch (ex) {}
  }

  useEffect(() => {
    async function fetchPost(id) {
      try {
        if (!pathname.endsWith('/edit')) return
        const { data } = await postService.getPost(id)
        setPost({ ...data, category: data.category.name })
      } catch (ex) {
        toast.error(ex.message)
        navigate(-1)
      }
    }

    async function fetchCategories() {
      let { data } = await categoryService.getCategories()
      setCategoriesList(data)
    }

    fetchPost(id)
    fetchCategories()
  }, [])

  return (
    <section className='dark:bg-gray-800'>
      <div className='m-8 py-8 lg:py-16 px-4 mx-auto max-w-screen-lg shadow-lg'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-violet-700 dark:text-white'>
          POST FORM
        </h2>
        <div className='w-full mb-8 flex justify-center'>
          <img
            ref={imagePreview}
            // src='https://www.professionnels.ma/sites/default/files/inline-images/iphone-14-design.jpeg'
            src={post.image}
            className='rounded-2xl w-[60%]'
          />
        </div>

        <form className='space-y-8'>
          <FileInput
            name='image'
            handleChange={(ev) => {
              setPost({ ...post, image: ev.target.files[0] })
              let reader = new FileReader()
              reader.readAsDataURL(ev.target.files[0])
              reader.onload = () => (imagePreview.current.src = reader.result)
            }}
            error={errors?.image}
          />
          <InputField
            name='title'
            label='Title'
            value={post.title}
            handleChange={(ev) => setPost({ ...post, title: ev.target.value })}
            error={errors?.title}
          />
          <DropDown
            label='Category'
            name='category'
            items={categoriesList}
            // value={post.category}
            onSelection={(value) => setPost({ ...post, category: value })}
          />
          <ul className='grid gap-6 w-full md:grid-cols-2'>
            <CheckBox
              id='public'
              name='isPrivate'
              label='PUBLIC'
              value={!post.isPrivate}
              onSelect={() => setPost({ ...post, isPrivate: false })}
            />
            <CheckBox
              id='private'
              name='isPrivate'
              label='PRIVATE'
              value={post.isPrivate}
              onSelect={() => setPost({ ...post, isPrivate: true })}
            />
          </ul>
          <MDEditor
            className='text-justify '
            value={post.content}
            name='content'
            onChange={(value) => setPost({ ...post, content: value })}
          />

          <button className=' w-full py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-violet-700 sm:w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
            {pathname.endsWith('/new') ? 'PUBLISH NOW' : 'UPDATE POST'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default PostForm
