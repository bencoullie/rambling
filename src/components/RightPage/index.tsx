import React from 'react'
import { connect } from 'react-redux';
import applicationState from '../../types/applicationState'
import './styles.css'

interface postcardPageProps {
	postcard: string
	loading: boolean
}

const RightPage = ({ postcard, loading }: postcardPageProps) => {
	const content = (
		<>
			<p>{postcard}</p>
			{postcard && <p>No need to reply.</p>}
		</>
	)

	return (
		<section className="page page--right-side">
			<div className="page__content">
				{!loading && content}
			</div>
		</section>
	)
}

const mapStateToProps = ({ stories, page, loading }: applicationState) => {
	return { postcard: stories[page] ? stories[page].postcard : '', loading }
}

export default connect(mapStateToProps)(RightPage);
