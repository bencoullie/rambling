import React from 'react'
import GameContainer from './components/GameContainer'
import './App.css'

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

interface baseAction {
  type: string
}

interface story {
  experience: string
  letter: string
}

export interface baseState {
  stories: story[]
}

const firstStory: story = {
  experience: 'Tiny, shimmering white lines on dark, black flecked green surrounded by a brown grey brown of sometimes blown dust and sand. Clouds fat to thin, panting from a mouth that hasn’t closed in minutes. Leaning down, the glove on his right hand pulled up exposing a pink yellow thumb to the morning whip of an asian winter sun, he readies contact — about to smudge the whitened leaf — ice?',
  letter: 'I know I should have written sooner. It’s just there’s been things upon things. Pilings of must dos and should dos. Anyway. It’s winter here. Yesterday it snowed. I’ve seen snow — the kind that looks like shredded cloud — but this was different. It was tired. This town seemed put down. Like some family pet let go. Hell, it even had the the steel grey frame, frosted in that heady white fluorescence you only really find in operating rooms. You know the light, basically smells of disinfectant and piss. The town just shut up. It was just a whole nother thing. I think this place, you’d like it. No need to reply.'
}

const initialState = {
  stories: [firstStory]
}

const reducer = (state: baseState = initialState, action: baseAction) => {
  console.log('reducer', state, action);
  return state;
}

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <GameContainer />
    </Provider>
  )
}

export default App
