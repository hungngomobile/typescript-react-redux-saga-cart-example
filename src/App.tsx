import React from 'react'

import { GlobalStyle } from '~/styles/Global'

import Cart from './components/Cart'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Cart />
    </>
  )
}

export default App
