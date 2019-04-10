import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import storiesReducer from './reducers/storiesReducer'
import createSagaMiddleware from 'redux-saga'
import fetchStoriesSaga from './sagas/fetchStoriesSaga'
import state from '../types/state'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const initialState: state = {
	stories: [],
	postcardIndex: 0
}

const store = createStore(storiesReducer, initialState, composeWithDevTools(
	applyMiddleware(sagaMiddleware)
))

// then run the saga
sagaMiddleware.run(fetchStoriesSaga)

export { initialState }
export default store
