import { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import useShop from '../contexts/ShopContext'
import useWish from '../contexts/WishContext'

// react toastify
import { toast } from 'react-toastify'

const SingleItem = ({ type, img, price, id }) => {
  // wish
  const { products, addToCart, removeFromCart } = useShop()
  const [isInCart, setIsInCart] = useState(false)
  const notifyWish = () => {
    if (isInWish) {
      toast.error('Remove from the wish')
    } else {
      toast.success('Added to the wish')
    }
  }
  // cart
  const { wishProducts, addToWish, removeFromWish } = useWish()

  const [isInWish, setIsInWish] = useState(false)

  const notifyCart = () => {
    if (isInCart) {
      toast.error('Remove from the cart')
    } else {
      toast.success('Added to the cart')
    }
  }

  // cart
  useEffect(() => {
    const productIsInCart = products.find((product) => product.id === id)

    if (productIsInCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [products, id])
  // wish
  useEffect(() => {
    const productIsInWish = wishProducts.find((product) => product.id === id)

    if (productIsInWish) {
      setIsInWish(true)
    } else {
      setIsInWish(false)
    }
  }, [wishProducts, id])

  const handleClick = () => {
    const product = { id, img, price }

    if (isInCart) {
      removeFromCart(product)
    } else {
      addToCart(product)
    }
  }
  const handleWish = () => {
    const product = { id, img }

    if (isInWish) {
      removeFromWish(product)
    } else {
      addToWish(product)
    }
  }
  return (
    <>
      <Card style={{ textAlign: 'center' }}>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>${price.toFixed(2)}</Card.Title>
          <div className='d-flex flex-column'>
            <Button
              className='mb-2'
              onClick={() => {
                handleClick()
                notifyCart()
              }}
              variant={isInCart ? 'danger' : 'primary'}
            >
              {isInCart ? 'Remove From Cart' : 'Add to cart'}
            </Button>
            <Button
              className='mb-2'
              onClick={() => {
                handleWish()
                notifyWish()
              }}
              variant={isInWish ? 'danger' : 'primary'}
            >
              {isInWish ? 'Remove From Wish' : 'Add to Wish'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleItem
