import { Product } from './Product'

export interface Cart {
  products: Product[]
  subtotal: number
  shipping: number
  total: number
}
