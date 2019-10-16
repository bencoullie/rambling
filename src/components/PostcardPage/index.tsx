import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import ApplicationState from '../../types/applicationState'
import { PageContent } from '../../types/story'
import './styles.css'
import coffeeStain from '../../assets/cup-coffee-stain-compressed.png'
import StoryAction, {
  UPDATE_STORY_VISIBILITY_ACTION_TYPE,
  UpdateStoryType,
} from '../../state/actions/storyAction'
import { CustomTypist } from '../CustomTypist'

interface Props {
  title: string
  postcard: PageContent
  loading: boolean
  page: number
  dispatch: Dispatch<StoryAction<UpdateStoryType>>
}

const PostcardPage = ({ postcard, loading, page, title, dispatch }: Props) => {
  const { text, visible, isContentTyped } = postcard
  const showClickableIcon = loading || !visible

  const dispatchVisibilityAction = (
    storyType: 'postcard' | 'experience',
    isTyped: boolean = true
  ) => {
    dispatch({
      type: UPDATE_STORY_VISIBILITY_ACTION_TYPE,
      storyIndex: page,
      visibility: true,
      isContentTyped: isTyped,
      storyType,
    })
  }

  const postcardTitle = (
    <CustomTypist
      signature={false}
      whenClicked={() => {
        dispatchVisibilityAction('postcard')
      }}
      typingDoneCallbackFn={() => {
        dispatchVisibilityAction('experience')
      }}
    >
      {title}
    </CustomTypist>
  )

  const postcardContent = isContentTyped ? (
    <div>
      <CustomTypist
        typingDoneCallbackFn={() => {
          dispatchVisibilityAction('postcard', false)
        }}
      >
        {text}
      </CustomTypist>
    </div>
  ) : (
    <p className="standard-text standard-text--major-shadow">
      {text}
      <span>
        <br />
        <br />
        No need to reply.
      </span>
    </p>
  )

  return (
    <section className="page page--right-side">
      <div className="page__content">
        <img
          src={coffeeStain}
          alt="Coffee Stain Background"
          className={'coffee-stain grey-scale-fade-in'}
        />
        {showClickableIcon ? postcardTitle : postcardContent}
      </div>
    </section>
  )
}

const mapStateToProps = ({ stories, page, loading }: ApplicationState) => {
  return {
    title: stories[page] ? stories[page].title : '',
    postcard: {
      text: stories[page] ? stories[page].postcard.text : '',
      visible: stories[page] ? stories[page].postcard.visible : false,
      isContentTyped: stories[page]
        ? stories[page].postcard.isContentTyped
        : true,
    },
    loading,
    page,
  }
}

export default connect(mapStateToProps)(PostcardPage)
