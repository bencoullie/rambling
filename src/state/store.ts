import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import initialReducer from './reducers/initialReducer'

const store = createStore(initialReducer, devToolsEnhancer({ name: 'Rambling' }))

export default store
