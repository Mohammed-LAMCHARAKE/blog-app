import React from 'react'

function TextArea(props) {
  return (
    <div className='relative'>
      <textarea
        id={props.name}
        rows='9'
        // className='block resize-none p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500'
        className='block resize-none text-lg border-gray-300 outline-violet-600 rounded-lg px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-50 dark:bg-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 peer'
        placeholder=' '
      />
      <label
        htmlFor={props.name}
        className='absolute text-md  rounded-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-violet-600 peer-focus:dark:text-violet-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
        {props.label}
      </label>
    </div>
  )
}

export default TextArea
