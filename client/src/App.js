import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Articles from './components/Articles'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import PostForm from './components/PostForm'
import Post from './components/Post'
// import Login from './components/Login'
// import SignUp from './components/SignUp'
import Table from './components/Table'
import Article from './components/Article'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/login' element={<Login />} /> */}
        <Route path='/posts/new' element={<PostForm />} />
        <Route path='/posts/:id/edit' element={<PostForm />} />
        <Route path='/posts/:id' element={<Article />} />
        <Route path='/posts' element={<Articles />} />
      </Routes>
      {/* <NavBar /> */}
      {/* <Article /> */}
      {/* <Table /> */}
      {/* <Post /> */}
      {/* <Articles /> */}
      {/* <PostForm /> */}
      <ToastContainer />
    </div>
  )
}

export default App
