import React from 'react'
import { connect } from 'react-redux'
import ApplicationState from '../../types/applicationState'
import { PageContent } from '../../types/story'
import './styles.css'

interface ExperiencePageProps {
  experience: PageContent
  loading: boolean
}

const LeftPage = ({ experience, loading }: ExperiencePageProps) => (
  <section className="page page--left-side">
    <div className="page__content">
      <p className="standard-text--minor-shadow">
        {!loading && experience.visible && experience.text}
      </p>
    </div>
  </section>
)

const mapStateToProps = ({ stories, page, loading }: ApplicationState) => {
  return {
    experience: {
      text: stories[page] ? stories[page].experience.text : '',
      visible: stories[page] ? stories[page].experience.visible : false,
    },
    loading,
  }
}

export default connect(mapStateToProps)(LeftPage)
