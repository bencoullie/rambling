import React from 'react'
import { connect } from 'react-redux'
import ApplicationState from '../../types/applicationState'
import './styles.css'

interface PostcardPageProps {
	postcard: string
	loading: boolean
}

const RightPage = ({ postcard, loading }: PostcardPageProps) => {
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

const mapStateToProps = ({ stories, page, loading }: ApplicationState) => {
	return { postcard: stories[page] ? stories[page].postcard : '', loading }
}

export default connect(mapStateToProps)(RightPage)
