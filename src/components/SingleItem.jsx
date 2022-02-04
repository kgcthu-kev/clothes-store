import { Button, Card } from 'react-bootstrap'

const SingleItem = ({ type, img, price }) => {
  return (
    <>
      <Card style={{ width: '12rem', textAlign: 'center' }}>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>${price}</Card.Title>
          <div className='d-flex flex-column'>
            <Button className='mb-2'>Add to cart</Button>
            <Button>Add to wishlist</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleItem
