import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { Product as ProductModel } from '~/entities/Product'
import { addProduct } from '~/store/cart/actions'

import { Button, Container, Image, Name, Price } from './styles'

interface ProductProps {
  product: ProductModel
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch()
  const formattedPrice = useMemo(() => `R$ ${product.price}`, [product.price])

  const handleAddToCart = useCallback(() => {
    dispatch(addProduct(product))
  }, [dispatch, product])

  return (
    <Container>
      <Image src={product.image} title={product.name} />
      <Name>{product.name}</Name>
      <Price>{formattedPrice}</Price>
      <Button onClick={handleAddToCart}>Add to cart</Button>
    </Container>
  )
}

export default Product
