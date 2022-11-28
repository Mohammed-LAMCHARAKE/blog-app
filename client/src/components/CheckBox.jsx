import React from 'react'

function CheckBox(props) {
  return (
    <li>
      <input
        type='radio'
        id={props.id}
        value={props.value}
        name={props.name}
        className='hidden peer'
        checked={props.value}
      />
      <label
        htmlFor={props.id}
        className='inline-flex justify-center items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-violet-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
        onClick={props.onSelect}>
        <div className='block'>
          <div className='w-full text-lg font-semibold'>{props.label}</div>
          {/* <div className='w-full text-sm'>
            A JavaScript library for building user interfaces.
          </div> */}
        </div>
      </label>
    </li>
  )
}

export default CheckBox
