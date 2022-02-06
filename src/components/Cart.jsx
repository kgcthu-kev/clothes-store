import { Button, Card, Container } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import useShop from '../contexts/ShopContext'
const Cart = ({ showCart, setShowCart }) => {
  const { products, total, removeFromCart } = useShop()
  return (
    <Container className='py-3 my-4 border'>
      <div className='d-flex justify-content-between'>
        <h3>{products.length > 0 ? 'Your bag' : 'Your bag is empty'}</h3>

        <FaTimes
          size={45}
          className='text-danger hover-overlay'
          style={{ cursor: 'pointer' }}
          onClick={() => setShowCart(!showCart)}
        />
      </div>
      {products.map((product) => (
        <Card className='flex-row my-4' key={product.id}>
          <Card.Img
            style={{ width: '10rem' }}
            variant='top'
            src={product.img}
          />
          <Card.Body>
            <Card.Title>Product ID: {product.id}</Card.Title>
            <Card.Text>$ {product.price}</Card.Text>
            <Button variant='danger' onClick={() => removeFromCart(product)}>
              Remove from cart
            </Button>
          </Card.Body>
        </Card>
      ))}
      {products.length > 0 && (
        <h3 style={{ textAlign: 'right' }}>Total: ${total}</h3>
      )}
    </Container>
  )
}

export default Cart
