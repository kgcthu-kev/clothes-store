import { Button, Card, Container } from 'react-bootstrap'
import useShop from '../contexts/ShopContext'
const Cart = () => {
  const { products, total, removeFromCart } = useShop()
  return (
    <Container className='py-3 my-4 border'>
      <h2>Your Bag</h2>
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
            <Button variant='danger'>Remove from cart</Button>
          </Card.Body>
        </Card>
      ))}
      <h3 style={{ textAlign: 'right' }}>Total: ${total}</h3>
    </Container>
  )
}

export default Cart
