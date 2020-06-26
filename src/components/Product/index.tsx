import React, { useMemo } from 'react'

import { Product as ProductModel } from '~/entities/Product'

import { Button, Container, Image, Name, Price } from './styles'

interface ProductProps {
  product: ProductModel
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const formattedPrice = useMemo(() => `R$ ${product.price}`, [product.price])

  return (
    <Container>
      <Image src={product.image} title={product.name} />
      <Name>{product.name}</Name>
      <Price>{formattedPrice}</Price>
      <Button>Add to cart</Button>
    </Container>
  )
}

export default Product
