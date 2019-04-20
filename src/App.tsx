import React from 'react'
import GameContainer from './components/GameContainer'
import './App.css'
import store from './state/store'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <GameContainer />
  </Provider>
)

export default App
