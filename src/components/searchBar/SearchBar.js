// Components
import SearchBarForm from './SearchBarForm'

const SearchBar = ({ searchedImage }) => {

   return (
      <section className='my-10 grid grid-cols-1 justify-items-center'>
         <SearchBarForm imageTerm={text => searchedImage(text)} />
      </section>
   )
}

export default SearchBar
