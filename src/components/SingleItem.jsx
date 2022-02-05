import { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import useShop from '../contexts/ShopContext'

const SingleItem = ({ type, img, price, id }) => {
  const { products, addToCart, removeFromCart } = useShop()
  const [isInCart, setIsInCart] = useState(false)

  useEffect(() => {
    const productIsInCart = products.find((product) => product.id === id)

    if (productIsInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [products, id])

  const handleClick = () => {
    const product = { id, img, price }

    if (isInCart) {
      removeFromCart(product)
    } else {
      addToCart(product)
    }
  }
  return (
    <>
      <Card style={{ textAlign: 'center' }}>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>${price}</Card.Title>
          <div className='d-flex flex-column'>
            <Button className='mb-2' onClick={handleClick}>
              {isInCart ? 'Remove From Cart' : 'Add to cart'}
            </Button>
            <Button>Add to wishlist</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleItem
