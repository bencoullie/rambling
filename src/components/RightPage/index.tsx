import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import ApplicationState from '../../types/applicationState'
import { PageContent } from '../../types/story'
import './styles.css'
import postcardIcon from '../../assets/postcard.jpg'
import StoryAction, {
  UPDATE_STORY_VISIBILITY_ACTION_TYPE,
} from '../../state/actions/storyAction'

interface PostcardPageProps {
  postcard: PageContent
  loading: boolean
  page: number
  dispatch: Dispatch<StoryAction>
}

const RightPage = ({
  postcard,
  loading,
  page,
  dispatch,
}: PostcardPageProps) => {
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
      <p>{postcard.text}</p>
      <p>No need to reply.</p>
    </>
  )

  return (
    <section className="page page--right-side">
      <div className="page__content">
        {loading || !postcard.visible ? (
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
