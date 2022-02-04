import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import SingleItem from '../components/SingleItem'
import { items } from '../data'

const Product = () => {
  const { productType } = useParams()
  return (
    <Container className='my-4'>
      <Row xs={1} md={2} lg={5} className='g-4'>
        {items
          .filter((item) => item.type === productType)
          .map((item) => (
            <Col>
              <SingleItem key={item.id} {...item} />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default Product
