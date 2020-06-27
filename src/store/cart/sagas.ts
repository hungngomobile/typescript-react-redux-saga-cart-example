import calculateCart from '~/services/calculateCart'

import { all, call, put, select, takeLatest } from 'redux-saga/effects'

import { RootState } from '../rootReducer'
import {
  calculateCart as actionCalculateCart,
  calculateCartFailure,
  calculateCartSuccess,
} from './actions'
import {
  ADD_PRODUCT,
  AddProductAction,
  CALCULATE_CART,
  CalculateCartAction,
} from './types'

function* calculateCartAction(action: CalculateCartAction): any {
  console.log('saga:calculateCartAction', action)
  try {
    const state: RootState = yield select((state) => state)

    // Calculate the cart totals.
    const cart = yield call(calculateCart, {
      items: state.cart.items.map((item) => ({
        quantity: item.quantity,
        product: item.product,
      })),
    })

    // Send calculate cart success.
    yield put(calculateCartSuccess(cart))
  } catch (e) {
    yield put(calculateCartFailure('There was an error'))
  }
}

function* addProduct(action: AddProductAction): any {
  console.log('saga:addProduct', action)
  yield put(actionCalculateCart())
}

export default all([
  takeLatest(CALCULATE_CART, calculateCartAction),
  takeLatest(ADD_PRODUCT, addProduct),
])
