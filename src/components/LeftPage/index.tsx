import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import ApplicationState from '../../types/applicationState'
import './styles.css'

interface ExperiencePageProps {
	experience: string
	loading: boolean
	dispatch: Dispatch
}

const LeftPage = ({ experience, loading }: ExperiencePageProps) => {
	return (
		<section className="page page--left-side">
			<div className="page__content">
				<p>{loading ? '...' : experience}</p>
			</div>
		</section>
	)
}

const mapStateToProps = ({ stories, page, loading }: ApplicationState) => {
	return { experience: stories[page] ? stories[page].experience : '', loading }
}

export default connect(mapStateToProps)(LeftPage)
