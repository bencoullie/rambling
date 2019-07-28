import React, { useEffect, Dispatch } from 'react'
import LeftPage from '../LeftPage'
import RightPage from '../RightPage'
import './styles.css'
import { connect } from 'react-redux'
import pageActionCreator from '../../state/actions/pageAction'
import { PageAction } from '../../types/pageAction'
import { Story } from '../../types/story'

interface GameContainerProps {
  dispatch: Dispatch<PageAction>
  numberOfStories: number
}

const GameContainer = ({ dispatch, numberOfStories }: GameContainerProps) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  })

  const handleKeyPress = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        dispatch(pageActionCreator('TURN_PAGE_LEFT', numberOfStories))
        break
      case 'ArrowRight':
        event.preventDefault()
        dispatch(pageActionCreator('TURN_PAGE_RIGHT', numberOfStories))
        break
    }
  }

  return (
    <main className="page-wrapper">
      <LeftPage />
      <RightPage />
    </main>
  )
}

const mapStateToProps = ({ stories }: { stories: Story[] }) => ({
  numberOfStories: stories.length,
})

export default connect(mapStateToProps)(GameContainer)
