/* @flow */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import demoApp from '../reducers/demoApp'
import rootSaga from '../sagas/sagas'

import type { Store } from 'redux'
import type { State } from '../reducers/types'
import type { Action } from '../actions/types'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore: (Object) => Store<State, Action> = (sagaMiddleware = createSagaMiddleware()) => {
  const store = createStore(
    demoApp,
    undefined,
    composeEnhancers(applyMiddleware(createLogger({ collapsed: true }), sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
