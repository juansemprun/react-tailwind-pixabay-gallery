import axios from 'axios'

export default class SearchImageService {

   constructor() {
      this.api = axios.create({
         baseURL: process.env.REACT_APP_API_URL
      })
   }

   searchImages = imageSearched => this.api.get(`?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${imageSearched}&image_type=photo&per_page=6`)

}