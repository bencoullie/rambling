import React from 'react'
import { connect } from 'react-redux'
import ApplicationState from '../../types/applicationState'
import { PageContent } from '../../types/story'
import './styles.css'

interface Props {
  experience: PageContent
  loading: boolean
}

const ExperiencePage = ({ experience, loading }: Props) => (
  <section className="page page--left-side">
    <div className="page__content">
      {!loading && experience.visible && (
        <p className="standard-text--minor-shadow float-fade-in">
          {experience.text}
        </p>
      )}
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

export default connect(mapStateToProps)(ExperiencePage)
