import { createStore } from 'redux'
import initialReducer from './reducers/initialReducer'

const store = createStore(initialReducer)

export default store
