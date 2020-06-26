import { Product } from '~/entities/Product'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

interface AddProductAction {
  type: typeof ADD_PRODUCT
  product: Product
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT
  product: Product
}

export type CartActionTypes = AddProductAction | RemoveProductAction

export interface CartStateItem {
  quantity: number
  lineTotal: number
  product: Product
}

export interface CartState {
  error: boolean
  loading: boolean
  items: CartStateItem[]
}
