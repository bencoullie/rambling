import React from 'react'
import { connect } from 'react-redux';
import state from '../../types/state'
import './styles.css'

interface postcardPageProps {
	postcard: string
}

const RightPage = ({ postcard }: postcardPageProps) => {
	return (
		<section className="page page--right-side">
			<div className="page__content">
				<p>{postcard}</p>
				{postcard && <p>No need to reply.</p>}
			</div>
		</section>
	)
}

function mapStateToProps (state: state) {
	return {
		postcard: state.stories[0] ? state.stories[0].postcard : ''
	};
}

export default connect(mapStateToProps)(RightPage);
