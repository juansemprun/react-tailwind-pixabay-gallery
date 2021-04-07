import { useState } from 'react'

const SearchBarForm = ({ imageTerm }) => {
   const [textSearched, setTextSearched] = useState('')

   const onSubmit = event => {
      event.preventDefault()
      imageTerm(textSearched)
   }

   const setImageSearch = event => {
      setTextSearched(event.target.value)
   }

   return (
      <form
         onSubmit={onSubmit}
         autoComplete='off'
         className='bg-white xs:max-w-sm sm:w-full flex items-center rounded-full shadow-xl item'>
         <input
            type='text'
            id='search'
            placeholder='Search'
            onChange={setImageSearch}
            className='rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none'
         />
         <div className="p-4">
            <button
               type='submit'
               className='bg-green-600 text-white rounded-full p-2 hover:bg-green-500 transition duration-300 focus:outline-none w-12 h-12 flex items-center justify-center'>
               <span className="material-icons">
                  search
               </span>
            </button>
         </div>
      </form>
   )
}

export default SearchBarForm
