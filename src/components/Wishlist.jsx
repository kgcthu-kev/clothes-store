import { Button, Card, Container } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import useWish from '../contexts/WishContext'
const Wishlist = ({ showWish, setShowWish }) => {
  const { wishProducts, removeFromWish } = useWish()
  return (
    <Container className='py-3 my-4 border'>
      <div className='d-flex justify-content-between'>
        <h3>
          {wishProducts.length > 0 ? 'Your wishlist' : 'Your wishlist is empty'}
        </h3>

        <FaTimes
          size={45}
          className='text-danger hover-overlay'
          style={{ cursor: 'pointer' }}
          onClick={() => setShowWish(!showWish)}
        />
      </div>
      {wishProducts.map((product) => (
        <Card className='flex-row my-4' key={product.id}>
          <Card.Img
            style={{ width: '10rem' }}
            variant='top'
            src={product.img}
          />
          <Card.Body>
            <Card.Title>Product ID: {product.id}</Card.Title>
            <Button variant='danger' onClick={() => removeFromWish(product)}>
              Remove from wish
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  )
}

export default Wishlist
