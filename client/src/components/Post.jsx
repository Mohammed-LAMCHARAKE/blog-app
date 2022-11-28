import React from 'react'

function Post(props) {
  return (
    // <>
    //   <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 w-full'>
    //     <div className='flex justify-between px-4 mx-auto max-w-full '>
    //       <article className='mx-auto w-screen dark:format-invert p-8'>
    //         <header className='mb-4 lg:mb-6 not-format'>
    //           <h1 className='mb-4 text-3xl text-center font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
    //             Best practices for successful prototypes
    //           </h1>
    //         </header>
    //         <img
    //           className='w-9/12  mx-auto'
    //           src='https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png'
    //           alt=''
    //         />
    //         <address className='flex items-center my-6 not-italic'>
    //           <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
    //             <img
    //               className='mr-4 w-14 h-14 rounded-full'
    //               src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
    //               alt='Jese Leos'
    //             />
    //             <div>
    //               <p
    //                 rel='author'
    //                 className='text-xl font-bold text-gray-900 dark:text-white'>
    //                 Posted By : Jese Leos
    //               </p>
    //               <p className='text-base font-light text-gray-500 dark:text-gray-400'>
    //                 <time
    //                   pubdate
    //                   datetime='2022-02-08'
    //                   title='February 8th, 2022'>
    //                   Feb. 8, 2022
    //                 </time>
    //               </p>
    //             </div>
    //           </div>
    //         </address>
    //         <p className='p-6 text-gray-700 text-justify'>
    //           Understanding typography Type properties A typeface is a
    //           collection of letters. While each letter is unique, certain shapes
    //           are shared across letters. A typeface represents shared patterns
    //           across a collection of letters. Baseline A typeface is a
    //           collection of letters. While each letter is unique, certain shapes
    //           are shared across letters. A typeface represents shared patterns
    //           across a collection of letters. Measurement from the baseline A
    //           typeface is a collection of letters. While each letter is unique,
    //           certain shapes are shared across letters. A typeface represents
    //           shared patterns across a collection of letters.
    //         </p>
    //         <form className='mb-6'>
    //           <div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
    //             <label for='comment' className='sr-only'>
    //               Your comment
    //             </label>
    //             <textarea
    //               id='comment'
    //               rows='6'
    //               className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
    //               placeholder='Write a comment...'
    //               required></textarea>
    //           </div>
    //           <button
    //             type='submit'
    //             className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'>
    //             Post comment
    //           </button>
    //         </form>
    //         Comments
    //         <article className='p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900'>
    //           <footer className='flex justify-between items-center mb-2'>
    //             <div className='flex items-center'>
    //               <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
    //                 <img
    //                   className='mr-2 w-6 h-6 rounded-full'
    //                   src='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
    //                   alt='Michael Gough'
    //                 />
    //                 Michael Gough
    //               </p>
    //               <p className='text-sm text-gray-600 dark:text-gray-400'>
    //                 <time
    //                   pubdate
    //                   datetime='2022-02-08'
    //                   title='February 8th, 2022'>
    //                   Feb. 8, 2022
    //                 </time>
    //               </p>
    //             </div>
    //             <button
    //               id='dropdownComment1Button'
    //               data-dropdown-toggle='dropdownComment1'
    //               className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
    //               type='button'>
    //               <svg
    //                 className='w-5 h-5'
    //                 aria-hidden='true'
    //                 fill='currentColor'
    //                 viewBox='0 0 20 20'
    //                 xmlns='http://www.w3.org/2000/svg'>
    //                 <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
    //               </svg>
    //               <span className='sr-only'>Comment settings</span>
    //             </button>
    //             {/* <!-- Dropdown menu --> */}
    //             <div
    //               id='dropdownComment1'
    //               className='hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'></div>
    //           </footer>
    //           <p>
    //             Very straight-to-point article. Really worth time reading. .{' '}
    //           </p>
    //         </article>
    //       </article>
    //     </div>
    //   </main>
    //   <aside
    //     aria-label='Related articles'
    //     className='py-8 lg:py-24 bg-gray-50 dark:bg-gray-800'>
    //     <div className='px-4 mx-auto max-w-screen-xl'>
    //       <h2 className='mb-8 text-2xl font-bold text-gray-900 dark:text-white'>
    //         Related articles
    //       </h2>
    //       <div className='flex justify-center gap-12 md:flex-wrap'>
    //         <article className='max-w-xs'>
    //           <a href='#'>
    //             <img
    //               src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png'
    //               className='mb-5 rounded-lg'
    //               alt='Image 4'
    //             />
    //           </a>
    //           <h2 className='mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white'>
    //             <a href='#'>Our first project with React</a>
    //           </h2>
    //           <p className='mb-4 font-light text-gray-500 dark:text-gray-400'>
    //             Over the past year, Volosoft has undergone many changes! After
    //             months of preparation.
    //           </p>
    //           <a
    //             href='#'
    //             className='inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline'>
    //             Read More
    //           </a>
    //         </article>
    //         <article className='max-w-xs'>
    //           <a href='#'>
    //             <img
    //               src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png'
    //               className='mb-5 rounded-lg'
    //               alt='Image 4'
    //             />
    //           </a>
    //           <h2 className='mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white'>
    //             <a href='#'>Our first project with React</a>
    //           </h2>
    //           <p className='mb-4 font-light text-gray-500 dark:text-gray-400'>
    //             Over the past year, Volosoft has undergone many changes! After
    //             months of preparation.
    //           </p>
    //           <a
    //             href='#'
    //             className='inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline'>
    //             Read More
    //           </a>
    //         </article>
    //       </div>
    //     </div>
    //   </aside>
    // </>
    <div className='grid items-center grid-cols-1 md:grid-cols-2 bg-purple-100 m-4'>
      <div className='order-2 h-64 md:order-1 md:h-full'>
        <img
          src='https://s.yimg.com/uu/api/res/1.2/Y0sdCqqSrXzmtFWgzjwgZg--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/280da9d0-33d8-11ed-beeb-9f0777e02779.cf.jpg'
          className='object-cover w-full h-full bg-center rounded-xl'
        />
      </div>
      <div className='order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0'>
        <p className='mb-3 text-gray-500'>
          <time
            itemprop='datePublished dateModified'
            datetime='2010-08-07 11:11:03-0400'
            pubdate>
            Jan 02 2021
          </time>
        </p>
        <h1
          className='mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl'
          itemprop='headline'
          title='Rise of Tailwind - A Utility First CSS Framework'>
          Rise of Tailwind - A Utility First CSS Framework
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          odit iste facilis omnis ipsa reprehenderit cum voluptatem ea esse ad
          temporibus exercitationem provident, cumque alias. Ipsa sequi qui at
          velit.
        </p>
        <div className='mt-5'>
          <p className='text-sm font-semibold text-gray-800'>Praveen Juge</p>
          <p className='text-sm text-gray-500'>Swell Guy</p>
        </div>
      </div>
    </div>
  )
}

export default Post
