import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import initialReducer from './reducers/initialReducer'
import createSagaMiddleware from 'redux-saga'
import fetchStoriesSaga from './sagas/fetchStoriesSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(initialReducer, composeWithDevTools(
	applyMiddleware(sagaMiddleware)
))

// then run the saga
sagaMiddleware.run(fetchStoriesSaga)

export default store
