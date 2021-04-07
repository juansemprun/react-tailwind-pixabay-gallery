import { useState, useEffect } from 'react'

// Layout
import Footer from './components/layout/footer/Footer'

// Pages
import ErrorPage from './components/pages/ErrorPage'

// Components
import SearchBar from './components/searchBar/SearchBar'
import CardList from './components/cardList/CardList'
import SkeletonCard from './components/shared/SkeletonCard'

// Service
import SearchImageService from './services/searchImages.service'

function App() {

  const [term, setTerm] = useState('')
  const [imagesList, setImagesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getImages(term)
    setIsLoading(true)
  }, [term])

  const getImages = term => {
    const searchImageService = new SearchImageService()

    searchImageService
      .searchImages(term)
      .then(response => {
        setImagesList(response.data.hits)
      })
      .then(() => setIsLoading(false))
      .catch(err => console.log(err))
  }

  return (
    <>
      <SearchBar searchedImage={text => setTerm(text)} />

      {isLoading ? <SkeletonCard /> : <CardList images={imagesList} />}

      {!isLoading && !imagesList.length && <ErrorPage />}

      <Footer />
    </>
  )
}

export default App