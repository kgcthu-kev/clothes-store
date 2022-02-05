// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Container } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { newItems } from '../data'
import SingleItem from './SingleItem'

const NewItems = () => {
  return (
    <Container className='mt-5'>
      <h2 className='mb-4'>New Arrivals</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={45}
        slidesPerView={5}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {newItems.map((item) => (
          <SwiperSlide key={item.id}>
            <SingleItem type={item.type} price={item.price} img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default NewItems
