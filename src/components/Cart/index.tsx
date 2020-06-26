import React from 'react'

import { Table } from './styles'

const Cart: React.FC = () => {
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
        <tr className="line-item">
          <th scope="row">Product example</th>
          <td className="price">R$ 2,50</td>
          <td>x4</td>
          <td className="price">R$ 10,00</td>
        </tr>
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
