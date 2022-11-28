import React from 'react'

function Table(props) {
  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-md text-gray-700 uppercase bg-purple-400 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-all-search'
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label for='checkbox-all-search' className='sr-only'>
                  checkbox
                </label>
              </div>
            </th>
            <th scope='col' className='py-3 px-6'>
              Product name
            </th>

            <th scope='col' className='py-3 px-6'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <td className='p-4 w-4'>
            <div className='flex items-center'>
              <input
                id='checkbox-table-search-3'
                type='checkbox'
                className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label for='checkbox-table-search-3' className='sr-only'>
                checkbox
              </label>
            </div>
          </td>
          <th
            scope='row'
            className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
            Apple AirPods
          </th>
          <td className='py-4 px-6'>White</td>
          <td className='py-4 px-6'>Accessories</td>
          <td className='py-4 px-6'>No</td>
          <td className='py-4 px-6'>Yes</td>
          <td className='py-4 px-6'>$399</td>
          <td className='py-4 px-6'>38 g</td>
          <td className='flex items-center py-4 px-6 space-x-3'>
            <a
              href='#'
              className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
              Edit
            </a>
            <a
              href='#'
              className='font-medium text-red-600 dark:text-red-500 hover:underline'>
              Remove
            </a>
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default Table
