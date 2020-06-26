import {
  ADD_PRODUCT,
  CartActionTypes,
  CartState,
  REMOVE_PRODUCT,
} from './types'

const initialState: CartState = {
  error: false,
  loading: false,
  products: [],
}

export function cartReducer(
  state = initialState,
  action: CartActionTypes,
): CartState {
  switch (action.type) {
    case ADD_PRODUCT:
    case REMOVE_PRODUCT:
    default:
      return state
  }
}
