import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import useShop from '../contexts/ShopContext'
import useWish from '../contexts/WishContext'

// react toastify
import { toast } from 'react-toastify'

import {
  BsCartPlusFill,
  BsCartDashFill,
  BsSuitHeartFill,
  BsSuitHeart,
} from 'react-icons/bs'

const SingleItem = ({ type, img, price, id }) => {
  // cart
  const { products, addToCart, removeFromCart } = useShop()
  const [isInCart, setIsInCart] = useState(false)
  const notifyCart = () => {
    if (isInCart) {
      toast.error('Remove from the cart', {
        autoClose: 2000,
      })
    } else {
      toast.success('Added to the cart', {
        autoClose: 2000,
      })
    }
  }

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

  // wish
  const { wishProducts, addToWish, removeFromWish } = useWish()
  const [isInWish, setIsInWish] = useState(false)
  const notifyWish = () => {
    if (isInWish) {
      toast.error('Remove from the wishlist', {
        autoClose: 2000,
      })
    } else {
      toast.success('Added to the wishlist', {
        autoClose: 2000,
      })
    }
  }

  useEffect(() => {
    const productIsInWish = wishProducts.find((product) => product.id === id)

    if (productIsInWish) {
      setIsInWish(true)
    } else {
      setIsInWish(false)
    }
  }, [wishProducts, id])

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
          <div className='d-flex justify-content-between'>
            <span
              onClick={() => {
                handleWish()
                notifyWish()
              }}
              className={isInWish ? 'text-danger' : ''}
            >
              {isInWish ? (
                <BsSuitHeartFill size={35} />
              ) : (
                <BsSuitHeart size={35} />
              )}
            </span>

            <span
              onClick={() => {
                handleClick()
                notifyCart()
              }}
            >
              {isInCart ? (
                <BsCartDashFill size={35} />
              ) : (
                <BsCartPlusFill size={35} />
              )}
            </span>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleItem
