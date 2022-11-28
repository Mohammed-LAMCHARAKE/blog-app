import React from 'react'

function InputField(props) {
  return (
    <>
      <div className='relative'>
        <input
          type={props.type || 'text'}
          name={props.name}
          id={props.name}
          className='block border text-lg border-gray-300 outline-violet-600 rounded-lg px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-50 dark:bg-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 peer'
          placeholder=' '
          value={props.value}
          onChange={props.handleChange}
        />
        <label
          htmlFor={props.name}
          className='absolute text-md  rounded-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-violet-600 peer-focus:dark:text-violet-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
          {props.label}
        </label>
      </div>

      {props.error && (
        <span className='bg-red-50 rounded-full text-red-500 flex gap-x-2 px-1'>
          <svg className='w-4' viewBox='0 0 512 512' fill='red'>
            <path d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z' />
          </svg>
          error
        </span>
      )}
    </>
  )
}

export default InputField
