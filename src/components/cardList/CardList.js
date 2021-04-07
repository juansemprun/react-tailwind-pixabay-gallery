// Components
import Card from './Card'

const CardList = ({ images }) => {

   return (
      <section className='p-10 grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-14'>

         {images.map(image => (
            <Card
               key={image.id}
               imageInfo={image}
            />
         ))}

      </section>
   )
}

export default CardList

