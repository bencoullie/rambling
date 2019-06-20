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
import { CustomTypist } from '../CustomTypist'

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
      {imageIsLoaded && <CustomTypist>{postcard.text}</CustomTypist>}
    </>
  )

  return (
    <section className="page page--right-side">
      <div className="page__content">
        {// eslint-disable-next-line no-console
        console.log('Animation going.')}
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
