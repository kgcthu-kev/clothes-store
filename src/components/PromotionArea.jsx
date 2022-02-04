import { Carousel, Container } from 'react-bootstrap'

const PromotionArea = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className='d-block'
            style={{ height: '100vh', width: '100%' }}
            src='https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Up to 70% off</h3>
            <p>Discounts on fall collection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className='d-block'
            style={{ height: '100vh', width: '100%' }}
            src='https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Up to 70% off</h3>
            <p>Discounts on fall collection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className='d-block'
            style={{ height: '100vh', width: '100%' }}
            src='https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Up to 70% off</h3>
            <p>Discounts on fall collection</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default PromotionArea
