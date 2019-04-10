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

const mapStateToProps = (state: state) => ({
	postcard: state.stories[state.postcardIndex] ? state.stories[state.postcardIndex].postcard : ''
})

export default connect(mapStateToProps)(RightPage);
