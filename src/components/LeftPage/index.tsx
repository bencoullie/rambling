import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import state from '../../types/state'
import './styles.css'

interface experiencePageProps {
	experience: string,
	dispatch: Dispatch
}

const LeftPage = ({ experience }: experiencePageProps) => {
	return (
		<section className="page page--left-side">
			<div className="page__content">
				<p>{experience}</p>
			</div>
		</section>
	)
}

const mapStateToProps = (state: state) => ({
	experience: state.stories[state.postcardIndex] ? state.stories[state.postcardIndex].experience : ''
})

export default connect(mapStateToProps)(LeftPage);
