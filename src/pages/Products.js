import { Col, Container, Row } from 'react-bootstrap'
import SingleItem from '../components/SingleItem'
import { items } from '../data'

const Products = () => {
  return (
    <Container className='my-4'>
      <h2>All Products</h2>
      <Row xs={2} md={2} lg={5} className='g-4'>
        {items.map((item) => (
          <Col>
            <SingleItem key={item.id} {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products
