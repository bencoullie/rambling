import React from 'react'
import GameContainer from './components/GameContainer'
import './App.css'
import store from './state/store'
import { Provider } from 'react-redux'
import coffeeStain from './assets/cup-coffee-stain-compressed.png'

const preloadImages = (images: string[]) => {
  images.forEach(imageFileName => {
    new Image().src = imageFileName
  })
}

const App = () => {
  preloadImages([coffeeStain])

  return (
    <Provider store={store}>
      <GameContainer />
    </Provider>
  )
}

export default App
