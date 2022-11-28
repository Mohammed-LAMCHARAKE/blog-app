import React, { useState, useContext } from 'react'
import Joi from 'joi-browser'
import { Link, useNavigate } from 'react-router-dom'
import InputField from './InputField'
import authService from '../services/authService'
import GLOBAL_CONTEXT from '../globalContext'

function Login(props) {
  const [account, setAccount] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const context = useContext(GLOBAL_CONTEXT)

  const navigate = useNavigate()

  async function handleSubmit(ev) {
    try {
      ev.preventDefault()
      let { error } = Joi.validate(
        account,
        {
          email: Joi.string().email().min(5).max(50).label('Email').required(),
          password: Joi.string().min(5).max(30).label('Password').required()
        },
        { abortEarly: true }
      )

      if (!error) setErrors(null)
      else {
        const errors = {}
        for (let item of error.details) errors[item.path] = item.message
        setErrors(errors)
        return
      }

      await authService.login(account.email, account.password)
      navigate(-1, { replace: true })
    } catch (ex) {
      context.setAlert({ type: 'error', message: ex.message })
    }
  }

  function handleChange(ev) {
    setAccount({ ...account, [ev.target.name]: ev.target.value })
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-4xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white'>
              Sign In
            </h1>
            <form className='space-y-4 md:space-y-6 ' onSubmit={handleSubmit}>
              <InputField
                label='Email'
                name='email'
                handleChange={handleChange}
                error={errors?.email}
              />
              <InputField
                label='Password'
                type='password'
                name='password'
                handleChange={handleChange}
                error={errors?.password}
              />

              <div className='flex items-center justify-between'>
                <Link
                  to='/reset-password'
                  className='text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-500'>
                  Forgot password?
                </Link>
              </div>
              <button className='w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'>
                Sign in
              </button>
              <p className='text-sm text-center font-light text-gray-500 dark:text-gray-400'>
                Don’t have an account yet?{' '}
                <Link
                  to='/auth/signup'
                  className='font-medium text-indigo-600 hover:underline dark:text-indigo-500'>
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
