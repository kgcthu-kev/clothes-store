import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import SingleItem from '../components/SingleItem'
import { items } from '../data'

const Product = () => {
  const { productType } = useParams()

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <Container className='my-4'>
      <h2>{capitalizeFirstLetter(productType)}</h2>
      <Row xs={1} md={2} lg={5} className='g-4'>
        {items
          .filter((item) => item.type === productType)
          .map((item) => (
            <Col key={item.id}>
              <SingleItem {...item} />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default Product
