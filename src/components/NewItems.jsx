// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Container } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { newItems } from '../data'
import SlideItem from './SlideItem'

const NewItems = () => {
  return (
    <Container className='mt-5'>
      <h2 className='mb-4'>New Arrivals</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={45}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {newItems.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideItem type={item.type} price={item.price} img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default NewItems
