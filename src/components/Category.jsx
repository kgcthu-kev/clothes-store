import { Button, Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Category = ({ img, title, url }) => {
  const navigate = useNavigate()
  function handleClick() {
    navigate(url)
  }
  return (
    <Col>
      <Card style={{ color: '#f7f2f2' }}>
        <Card.Img variant='top' src={img} />
        <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
          <Card.Title>{title}</Card.Title>
          <Button onClick={handleClick}>Shop Now</Button>
        </Card.ImgOverlay>
      </Card>
    </Col>
  )
}
export default Category
