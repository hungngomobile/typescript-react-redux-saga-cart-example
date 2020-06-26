import { takeLatest } from 'redux-saga/effects'

import { calculateCartAction } from './cart/sagas'

export default function* rootSaga(): Generator {
  yield takeLatest('CALCULATE_CART', calculateCartAction)
}
