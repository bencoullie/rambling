import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import ApplicationState from '../../types/applicationState'
import { PageContent } from '../../types/story'
import './styles.css'
import experienceIcon from '../../assets/experience.png'
import StoryAction, {
  UPDATE_STORY_VISIBILITY_ACTION_TYPE,
} from '../../state/actions/storyAction'

interface ExperiencePageProps {
  experience: PageContent
  loading: boolean
  page: number
  dispatch: Dispatch<StoryAction>
}

const LeftPage = ({
  experience,
  loading,
  page,
  dispatch,
}: ExperiencePageProps) => {
  const dispatchVisibilityAction = () => {
    if (!experience.visible) {
      dispatch({
        type: UPDATE_STORY_VISIBILITY_ACTION_TYPE,
        storyIndex: page,
        visibility: true,
        storyType: 'experience',
      })
    }
  }

  return (
    <section className="page page--left-side">
      <div className="page__content">
        <p>
          {loading || !experience.visible ? (
            <img
              src={experienceIcon}
              className="inverted-colors"
              onClick={dispatchVisibilityAction}
            />
          ) : (
            experience.text
          )}
        </p>
      </div>
    </section>
  )
}

const mapStateToProps = ({ stories, page, loading }: ApplicationState) => {
  return {
    experience: {
      text: stories[page] ? stories[page].experience.text : '',
      visible: stories[page] ? stories[page].experience.visible : false,
    },
    loading,
    page,
  }
}

export default connect(mapStateToProps)(LeftPage)
