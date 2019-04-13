import { Store, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import { initialState } from './reducers'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store: Store = createStore(reducers, initialState, composeWithDevTools(
	applyMiddleware(sagaMiddleware)
))

// then run the saga
sagaMiddleware.run(rootSaga)

export { initialState }
export default store
