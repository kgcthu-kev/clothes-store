import { createContext, useReducer, useContext } from 'react'
import wishReducer, { initialState } from './wishReducer'

const WishContext = createContext(initialState)

export const WishProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishReducer, initialState)

  const addToWish = (product) => {
    const updatedWish = state.products.concat(product)
    dispatch({
      type: 'ADD_TO_WISH',
      payload: {
        products: updatedWish,
      },
    })
  }

  const removeFromWish = (product) => {
    const updatedWish = state.products.filter(
      (currentProduct) => currentProduct.id !== product.id
    )

    dispatch({
      type: 'REMOVE_FROM_WISH',
      payload: {
        products: updatedWish,
      },
    })
  }

  const value = {
    wishProducts: state.products,
    addToWish,
    removeFromWish,
  }
  return <WishContext.Provider value={value}>{children}</WishContext.Provider>
}

const useWish = () => {
  const context = useContext(WishContext)

  if (context === undefined) {
    throw new Error('useWish must be used within WishContext')
  }

  return context
}

export default useWish
