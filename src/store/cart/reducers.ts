import produce from 'immer'

import {
  ADD_PRODUCT,
  CartActionTypes,
  CartState,
  REMOVE_PRODUCT,
} from './types'

const initialState: CartState = {
  error: false,
  loading: false,
  items: [],
}

export function cartReducer(
  state = initialState,
  action: CartActionTypes,
): CartState {
  switch (action.type) {
    case ADD_PRODUCT:
      return produce(state, (draftState) => {
        const foundProduct = draftState.items.find(
          (item) => item.product.id === action.product.id,
        )
        if (foundProduct) {
          foundProduct.quantity += 1
        } else {
          draftState.items.push({
            quantity: 1,
            product: action.product,
          })
        }
      })
    case REMOVE_PRODUCT:
    default:
      return state
  }
}
