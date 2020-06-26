import { Cart } from '~/entities/Cart'
import { Product } from '~/entities/Product'

import { Promise } from 'bluebird'

interface CalculateCartDto {
  products: Product[]
}

export default async function calculateCart({
  products,
}: CalculateCartDto): Promise<Cart> {
  const shipping = 5
  const subtotal = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0,
  )
  const total = shipping + subtotal

  return Promise.delay(1000, {
    products,
    shipping,
    subtotal,
    total,
  })
}
