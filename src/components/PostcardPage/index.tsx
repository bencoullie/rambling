import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import ApplicationState from '../../types/applicationState'
import { PageContent } from '../../types/story'
import './styles.css'
import postcardIcon from '../../assets/postcard.jpg'
import coffeeStain from '../../assets/cup-coffee-stain-compressed.png'
import StoryAction, {
  UPDATE_STORY_VISIBILITY_ACTION_TYPE,
  UpdateStoryType,
} from '../../state/actions/storyAction'
import { CustomTypist } from '../CustomTypist'
import classNames from 'classnames'

interface Props {
  postcard: PageContent
  loading: boolean
  page: number
  dispatch: Dispatch<StoryAction<UpdateStoryType>>
}

const PostcardPage = ({ postcard, loading, page, dispatch }: Props) => {
  const showClickableIcon = loading || !postcard.visible

  const dispatchVisibilityAction = (storyType: 'postcard' | 'experience') => {
    dispatch({
      type: UPDATE_STORY_VISIBILITY_ACTION_TYPE,
      storyIndex: page,
      visibility: true,
      storyType,
    })
  }

  return (
    <section className="page page--right-side">
      <div className="page__content">
        <img
          src={coffeeStain}
          alt="Coffee Stain Background"
          className={classNames('coffee-stain', {
            'no-display': showClickableIcon,
          })}
        />
        {showClickableIcon ? (
          <img
            src={postcardIcon}
            className="postcard-icon"
            onClick={() => {
              dispatchVisibilityAction('postcard')
            }}
          />
        ) : (
          <CustomTypist
            callbackFn={() => {
              dispatchVisibilityAction('experience')
            }}
          >
            {postcard.text}
          </CustomTypist>
        )}
      </div>
    </section>
  )
}

const mapStateToProps = ({ stories, page, loading }: ApplicationState) => {
  return {
    postcard: {
      text: stories[page] ? stories[page].postcard.text : '',
      visible: stories[page] ? stories[page].postcard.visible : false,
    },
    loading,
    page,
  }
}

export default connect(mapStateToProps)(PostcardPage)