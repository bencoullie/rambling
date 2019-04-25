import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import ApplicationState from '../../types/applicationState'
import { PageContent } from '../../types/story'
import './styles.css'
import experienceIcon from '../../assets/experience.png'

interface ExperiencePageProps {
	experience: PageContent
	loading: boolean
	dispatch: Dispatch
}

const LeftPage = ({ experience, loading }: ExperiencePageProps) => {
	return (
		<section className="page page--left-side">
			<div className="page__content">
				<p>{loading || !experience.visible ? <img src={experienceIcon} className="inverted-colors" /> : experience.text}</p>
			</div>
		</section>
	)
}

const mapStateToProps = ({ stories, page, loading }: ApplicationState) => {
	return {
		experience: {
			text: stories[page] ? stories[page].experience.text : '',
			visible: stories[page] ? stories[page].experience.visible : false
		}, loading
	}
}

export default connect(mapStateToProps)(LeftPage)
