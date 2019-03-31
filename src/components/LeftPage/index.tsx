import React from 'react'
import { connect } from 'react-redux';
import { baseState } from '../../App'
import './styles.css'

interface experiencePageProps {
	experience: string
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

function mapStateToProps (state: baseState) {
	return {
		experience: state.stories[0].experience
	};
}

export default connect(mapStateToProps)(LeftPage);
