import produce from 'immer'

import {
  ADD_PRODUCT,
  CALCULATE_CART,
  CALCULATE_CART_FAILURE,
  CALCULATE_CART_SUCCESS,
  CartActionTypes,
  CartState,
  REMOVE_PRODUCT,
} from './types'

const initialState: CartState = {
  error: false,
  loading: false,
  items: [],
  subtotal: 0,
  shipping: 0,
  total: 0,
}

export function cartReducer(
  state = initialState,
  action: CartActionTypes,
): CartState {
  switch (action.type) {
    case ADD_PRODUCT:
      return produce(state, (draftState) => {
        const foundItem = draftState.items.find(
          (item) => item.product.id === action.product.id,
        )
        if (foundItem) {
          foundItem.quantity += 1
          foundItem.lineTotal = foundItem.product.price * foundItem.quantity
        } else {
          draftState.items.push({
            quantity: 1,
            product: action.product,
            lineTotal: action.product.price,
          })
        }
      })
    case REMOVE_PRODUCT:
      return produce(state, (draftState) => {
        const foundItem = draftState.items.find(
          (item) => item.product.id === action.product.id,
        )

        if (foundItem) {
          if (foundItem.quantity < 2) {
            draftState.items.splice(draftState.items.indexOf(foundItem), 1)
          } else {
            foundItem.quantity -= 1
          }
        }

        return draftState
      })
    case CALCULATE_CART:
      return { ...state, loading: true }
    case CALCULATE_CART_FAILURE:
      return { ...state, loading: false, error: true }
    case CALCULATE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        shipping: action.cart.shipping,
        subtotal: action.cart.subtotal,
        total: action.cart.total,
      }
    default:
      return state
  }
}
