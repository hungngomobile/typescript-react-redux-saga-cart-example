import { Cart } from '~/entities/Cart'
import { Product } from '~/entities/Product'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const CALCULATE_CART = 'CALCULATE_CART'
export const CALCULATE_CART_SUCCESS = 'CALCULATE_CART_SUCCESS'
export const CALCULATE_CART_FAILURE = 'CALCULATE_CART_FAILURE'

interface AddProductAction {
  type: typeof ADD_PRODUCT
  product: Product
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT
  product: Product
}

interface CalculateCartAction {
  type: typeof CALCULATE_CART
}

interface CalculateCartSuccessAction {
  type: typeof CALCULATE_CART_SUCCESS
  cart: Cart
}

interface CalculateCartFailureAction {
  type: typeof CALCULATE_CART_FAILURE
  message: string
}

export type CartActionTypes =
  | AddProductAction
  | RemoveProductAction
  | CalculateCartAction
  | CalculateCartSuccessAction
  | CalculateCartFailureAction

export interface CartStateItem {
  quantity: number
  lineTotal: number
  product: Product
}

export interface CartState {
  error: boolean
  loading: boolean
  items: CartStateItem[]
  shipping: number
  subtotal: number
  total: number
}
