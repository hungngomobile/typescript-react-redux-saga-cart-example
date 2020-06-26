import { Cart } from '~/entities/Cart'
import { Product } from '~/entities/Product'

import {
  ADD_PRODUCT,
  CALCULATE_CART,
  CALCULATE_CART_FAILURE,
  CALCULATE_CART_SUCCESS,
  CartActionTypes,
  REMOVE_PRODUCT,
} from './types'

export function addProduct(product: Product): CartActionTypes {
  return {
    type: ADD_PRODUCT,
    product,
  }
}

export function removeProduct(product: Product): CartActionTypes {
  return {
    type: REMOVE_PRODUCT,
    product,
  }
}

export function calculateCart(): CartActionTypes {
  return {
    type: CALCULATE_CART,
  }
}

export function calculateCartSuccess(cart: Cart): CartActionTypes {
  return {
    type: CALCULATE_CART_SUCCESS,
    cart,
  }
}

export function calculateCartFailure(message: string): CartActionTypes {
  return {
    type: CALCULATE_CART_FAILURE,
    message,
  }
}
