import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '~/store/rootReducer'

import CartItem from './CartItem'
import { Table } from './styles'

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart)

  return (
    <Table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Line total</th>
        </tr>
      </thead>
      <tbody>
        {cart.items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={3} scope="row">
            Subtotal
          </th>
          <td className="price">R$ 10,00</td>
        </tr>
        <tr>
          <th colSpan={3} scope="row">
            Shipping
          </th>
          <td className="price">R$ 5,00</td>
        </tr>
        <tr>
          <th colSpan={3} scope="row">
            Total
          </th>
          <td className="price">R$ 15,00</td>
        </tr>
      </tfoot>
    </Table>
  )
}

export default Cart
