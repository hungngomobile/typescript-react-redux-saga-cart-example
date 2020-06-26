import React from 'react'

import { GlobalStyle } from '~/styles/Global'

import Cart from './components/Cart'
import ProductList from './components/ProductList'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Cart />
      <ProductList />
    </>
  )
}

export default App
