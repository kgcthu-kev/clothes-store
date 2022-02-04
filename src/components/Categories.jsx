import { Container, Row } from 'react-bootstrap'
import { categories } from '../data'
import Category from './Category'

const Categories = () => {
  return (
    <Container className='my-5'>
      <Row xs={1} md={2} lg={4} className='g-4'>
        {categories.map((item) => (
          <Category key={item.id} img={item.img} title={item.title} />
        ))}
      </Row>
    </Container>
  )
}

export default Categories
