import React, { Dispatch, useState } from 'react'
import { connect } from 'react-redux'
import ApplicationState from '../../types/applicationState'
import { PageContent } from '../../types/story'
import './styles.css'
import postcardIcon from '../../assets/postcard.jpg'
import coffeeStain from '../../assets/cup-coffee-stain.png'
import StoryAction, {
  UPDATE_STORY_VISIBILITY_ACTION_TYPE,
  UpdateStoryType,
} from '../../state/actions/storyAction'

interface PostcardPageProps {
  postcard: PageContent
  loading: boolean
  page: number
  dispatch: Dispatch<StoryAction<UpdateStoryType>>
}

const RightPage = ({
  postcard,
  loading,
  page,
  dispatch,
}: PostcardPageProps) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  const showClickableIcon = loading || !postcard.visible

  const dispatchVisibilityAction = () => {
    if (!postcard.visible) {
      dispatch({
        type: UPDATE_STORY_VISIBILITY_ACTION_TYPE,
        storyIndex: page,
        visibility: true,
        storyType: 'postcard',
      })
    }
  }

  const content = (
    <>
      <img
        src={coffeeStain}
        alt="Coffee Stain Background"
        className="coffee-stain"
        onLoad={() => {
          setImageIsLoaded(true)
        }}
      />
      {imageIsLoaded && (
        <>
          <p>{postcard.text}</p>
          <p>No need to reply.</p>
        </>
      )}
    </>
  )

  return (
    <section className="page page--right-side">
      <div className="page__content">
        {// eslint-disable-next-line no-console
        console.log(
          "This apparently useless console log actually makes the animation smoother... what the actual fuck? I don't understand either"
        )}
        {showClickableIcon ? (
          <img
            src={postcardIcon}
            className="postcard-icon"
            onClick={dispatchVisibilityAction}
          />
        ) : (
          content
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

export default connect(mapStateToProps)(RightPage)
