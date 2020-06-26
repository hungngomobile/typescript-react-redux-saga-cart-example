import React from 'react'
import { Provider } from 'react-redux'

import store from '~/store'
import { GlobalStyle } from '~/styles/Global'

import Cart from './components/Cart'
import ProductList from './components/ProductList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Cart />
      <ProductList />
    </Provider>
  )
}

export default App
