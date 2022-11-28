import React from 'react'

function FileInput(props) {
  return (
    <div>
      <input
        onChange={props.handleChange}
        name={props.name}
        id={props.name}
        accept='image/*'
        type='file'
        className='text-lg text-gray-600 border w-full bg-gray-50
            file:mr-5 file:py-3 file:px-10
            rounded-lg file:border-0
            file:text-md file:font-semibold  file:text-white
            file:bg-gradient-to-r file:from-blue-600 file:to-indigo-600
            hover:file:cursor-pointer hover:file:opacity-80'
      />
      {props.error && (
        <span className='bg-red-50 rounded-full text-red-500 flex gap-x-2 px-1'>
          <svg className='w-4' viewBox='0 0 512 512' fill='red'>
            <path d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z' />
          </svg>
          {props.error}
        </span>
      )}
    </div>
  )
}

export default FileInput
