import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
