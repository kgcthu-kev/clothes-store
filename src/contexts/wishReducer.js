export const initialState = {
  products: [],
}

const wishReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_WISH':
      console.log('ADD_TO_WISH', payload)

      return {
        ...state,
        products: payload.products,
      }
    case 'REMOVE_FROM_WISH':
      console.log('REMOVE_FROM_WISH', payload)

      return {
        ...state,
        products: payload.products,
      }
    default:
      throw new Error(`No case for type ${type} found in wishReducer.`)
  }
}

export default wishReducer
