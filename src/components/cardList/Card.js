const Card = ({ imageInfo }) => {

   const { likes, pageURL, tags, user, views, webformatURL } = imageInfo

   return (
      <article
         className='wrapper max-w-xs bg-gray-50 rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all'
      >
         <img
            className='w-full h-56 object-cover'
            src={webformatURL}
            alt={tags}
         />

         <div className='p-3 space-y-3'>
            <h3 className='text-gray-800 font-semibold text-md'>
               Image by {user}
            </h3>
            <p className='text-sm text-gray-600 leading-sm'>

               <strong>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     className='w-5 ml-2 inline align-bottom'
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                     />
                  </svg>
                  {views}
               </strong>
               <strong>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     className='w-5 ml-2 inline align-bottom'
                  >
                     <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                     />
                  </svg>
                  {likes}
               </strong>
            </p>
         </div>

         <a
            className='bg-green-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-green-500'
            href={pageURL}
         >
            Go to original page
            <svg
               xmlns='http://www.w3.org/2000/svg'
               fill='none'
               viewBox='0 0 24 24'
               stroke='currentColor'
               className='w-5 ml-2'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
               />
            </svg>
         </a>
      </article>
   )
}

export default Card
