import React, { useState } from 'react'

function DropDown(props) {
  // const [listVisible, setListVisible] = useState(false)
  // const [itemSelected, setItemSelected] = useState(props.label)

  function getSelectedItemId(item) {
    try {
      const id = document.querySelector(`option[value=${item}]`)?.id
      if (id != null) props.onSelection(id)
      else props.onSelection(item)
      console.log(id, item)
    } catch (ex) {}
  }

  return (
    // <div>
    //   <div className='relative mt-1'>
    //     <button
    //       onClick={() => setListVisible(!listVisible)}
    //       // onBlur={() => setTimeout(setListVisible(false), 200)}
    //       type='button'
    //       className='relative w-full cursor-default rounded-md border border-gray-300 bg-gray-50 py-4 pl-3 pr-10 text-left shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 sm:text-lg'>
    //       <span className='flex items-center'>
    //         <img
    //           src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    //           alt=''
    //           className='h-6 w-6 flex-shrink-0 rounded-full'
    //         />

    //         <span className='block ml-2 truncate text-gray-600'>
    //           {' '}
    //           {itemSelected}
    //         </span>
    //       </span>
    //       <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
    //         {/* <!-- Heroicon name: mini/chevron-up-down --> */}
    //         <svg
    //           className='h-5 w-5 text-gray-400'
    //           viewBox='0 0 20 20'
    //           fill='currentColor'>
    //           <path
    //             fill-rule='evenodd'
    //             d='M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z'
    //             clip-rule='evenodd'
    //           />
    //         </svg>
    //       </span>
    //     </button>

    //     <ul
    //       className={`${
    //         listVisible ? null : 'hidden'
    //       } absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg`}
    //       tabindex='-1'
    //       role='listbox'
    //       aria-labelledby='listbox-label'
    //       aria-activedescendant='listbox-option-3'>
    //       <li
    //         key='1'
    //         onClick={(ev) => {
    //           setItemSelected(ev.target.innerText)
    //           setListVisible(false)
    //           console.log(ev.target.id)
    //         }}
    //         className='text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-violet-600 hover:text-white rounded-full'
    //         id='listbox-option-0'
    //         role='option'>
    //         <div className='flex items-center'>
    //           <img
    //             src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    //             alt=''
    //             className='h-6 w-6 flex-shrink-0 rounded-full'
    //           />
    //           {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
    //           <span className='font-normal ml-3 block truncate ' id='med saad'>
    //             Med Saad
    //           </span>
    //         </div>

    //         {/* <!--
    //       Checkmark, only display for selected option.

    //       Highlighted: "text-white", Not Highlighted: "text-violet-600"
    //     --> */}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className='relative sm:col-span-2'>
      <input
        onChange={(ev) => getSelectedItemId(ev.target.value)}
        list={props.name}
        className='block border text-lg border-gray-300 outline-violet-600 rounded-lg px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-50 dark:bg-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 peer'
        placeholder=' '
        value={props.value}
      />
      <label
        htmlFor={props.name}
        className='absolute text-lg  rounded-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-violet-600 peer-focus:dark:text-violet-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
        {props.label}
      </label>

      <datalist id={props.name}>
        {props.items.map((item, idx) => (
          <option key={idx} id={item._id} value={item.name} />
        ))}
      </datalist>
    </div>
  )
}

// DataList Menu
//  <div className='relative sm:col-span-2'>
//   <input
//     list='browsers'
//     className='block text-lg border-gray-300 outline-violet-600 rounded-lg px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-gray-50 dark:bg-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 peer'
//     placeholder=' '
//   />
//   <label className='absolute text-lg  rounded-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-violet-600 peer-focus:dark:text-violet-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
//     {'DataList'}
//   </label>

//   <datalist id='browsers'>
//     <option value='Internet Explorer' className='hover:bg-violet-600' />
//     <option value='Firefox'></option>
//     <option value='Chrome'></option>
//   </datalist>
// </div>

export default DropDown
