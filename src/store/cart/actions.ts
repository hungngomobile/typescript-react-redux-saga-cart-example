import { Product } from '~/entities/Product'

import { ADD_PRODUCT, CartActionTypes, REMOVE_PRODUCT } from './types'

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
