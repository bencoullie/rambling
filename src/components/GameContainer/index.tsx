import React, { useEffect, Dispatch } from 'react'
import LeftPage from '../LeftPage'
import RightPage from '../RightPage'
import './styles.css'
import { connect } from 'react-redux'
import pageActionCreator from '../../state/actions/pageAction'
import { PageAction } from '../../types/pageAction'
import { Story } from '../../types/story'
import loader from '../Loader'

const preloadImages = (images: string[]) => {
  images.forEach(imageFileName => {
    new Image().src = imageFileName
  })
}

interface GameContainerProps {
  dispatch: Dispatch<PageAction>
  numberOfStories: number
  loading: boolean
}

const GameContainer = ({
  dispatch,
  numberOfStories,
  loading,
}: GameContainerProps) => {
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

  const pages = (
    <main className="page-wrapper">
      <LeftPage />
      <RightPage />
    </main>
  )

  return <>{loading ? loader : pages}</>
}

const mapStateToProps = ({
  stories,
  loading,
}: {
  stories: Story[]
  loading: boolean
}) => ({
  numberOfStories: stories.length,
  loading,
})

export default connect(mapStateToProps)(GameContainer)
