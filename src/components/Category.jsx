import { Button, Card, Col } from 'react-bootstrap'

const Category = ({ img, title }) => {
  return (
    <Col>
      <Card style={{ color: 'white', textAlign: 'center' }}>
        <Card.Img
          variant='top'
          src={img}
          style={{ height: '15rem', width: '259px' }}
        />
        <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
          <Card.Title>{title}</Card.Title>
          <Button>Shop Now</Button>
        </Card.ImgOverlay>
      </Card>
    </Col>
  )
}
export default Category