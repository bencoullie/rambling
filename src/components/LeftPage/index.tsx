import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import applicationState from '../../types/applicationState'
import './styles.css'

interface experiencePageProps {
	experience: string
	loading: boolean
	dispatch: Dispatch
}

const LeftPage = ({ experience, loading }: experiencePageProps) => {
	return (
		<section className="page page--left-side">
			<div className="page__content">
				<p>{loading ? '...' : experience}</p>
			</div>
		</section>
	)
}

const mapStateToProps = ({ stories, page, loading }: applicationState) => {
	return { experience: stories[page] ? stories[page].experience : '', loading }
}

export default connect(mapStateToProps)(LeftPage);
