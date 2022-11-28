import Joi from 'joi-browser'
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GLOBAL_CONTEXT from '../globalContext'
import authService from '../services/authService'
import InputField from './InputField'

function SignUp(props) {
  const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
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
          firstName: Joi.string().min(2).max(10).label('First Name').required(),
          lastName: Joi.string().min(2).max(15).label('Last Name').required(),
          email: Joi.string().email().min(5).max(35).label('Email').required(),
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

      let response = await authService.signup(account)
      context.setUser(authService.getCurrentUser())
      // context.setAlert({ type: 'success', message: response?.data })
      navigate('/', { replace: true })
    } catch (ex) {
      context.setAlert({ type: 'error', message: ex.message })
    }
  }

  function handleChange(ev) {
    setAccount({ ...account, [ev.target.name]: ev.target.value })
  }

  return (
    <section className='bg-gray-50 h-screen dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-4xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white'>
              Sign Up
            </h1>
            <form onSubmit={handleSubmit}>
              <div className='grid gap-4 mb-4 sm:grid-cols-1 lg:grid-cols-2'>
                {/* <div className='relative'>
                  <input
                    type='text'
                    id='default_outlined'
                    className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer'
                    placeholder=' '
                  />
                  <label
                    for='default_outlined'
                    className='absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
                    First Name
                  </label>
                </div> */}
                <div>
                  <InputField
                    label='First Name'
                    name='firstName'
                    handleChange={handleChange}
                    error={errors?.firstName}
                  />
                </div>
                <div>
                  <InputField
                    label='Last Name'
                    name='lastName'
                    handleChange={handleChange}
                    error={errors?.lastName}
                  />
                </div>
              </div>
              <div className='grid gap-4'>
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
              </div>

              <div className='mt-4 flex items-center space-x-4'>
                <button className='w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'>
                  Register
                </button>
              </div>
              <p className='text-md pt-1 text-center font-light text-gray-500 dark:text-gray-400'>
                Already have an account ?{' '}
                <Link
                  to='/auth/login'
                  className='font-medium hover:underline text-indigo-500'>
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
