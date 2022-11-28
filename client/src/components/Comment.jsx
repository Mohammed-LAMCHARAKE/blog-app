import React from 'react'

function Comment(props) {
  return (
    <div className='p-4 mb-1 bg-gray-100 rounded-xl shadow-xl dark:bg-gray-900'>
      <footer className='flex justify-between items-center mb-2'>
        <div className='flex items-center'>
          <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
            <img
              className='mr-2 w-6 h-6 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
            />
            {`${props.comment.commentedBy.firstName} ${props.comment.commentedBy.lastName}`}
          </p>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            <time pubdate datetime='2022-02-08' title='February 8th, 2022'>
              Feb. 8, 2022
            </time>
          </p>
        </div>
        <button className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'>
            <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
          </svg>
          <span className='sr-only'>Comment settings</span>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div className='hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'></div>
      </footer>
      <p className='text-justify'>{props.comment.text}</p>
    </div>
  )
}

export default Comment
