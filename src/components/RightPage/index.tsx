import React from 'react'
import { connect } from 'react-redux'
import ApplicationState from '../../types/applicationState'
import { PageContent } from '../../types/story'
import './styles.css'
import postcardIcon from '../../assets/postcard.jpg'

interface PostcardPageProps {
	postcard: PageContent
	loading: boolean
}

const RightPage = ({ postcard, loading }: PostcardPageProps) => {
	const content = (
		<>
			<p>{postcard.text}</p>
			<p>No need to reply.</p>
		</>
	)

	return (
		<section className="page page--right-side">
			<div className="page__content">
				{loading || !postcard.visible ? <img src={postcardIcon} className="postcard-icon" /> : content}
			</div>
		</section>
	)
}

const mapStateToProps = ({ stories, page, loading }: ApplicationState) => {
	return {
		postcard: {
			text: stories[page] ? stories[page].postcard.text : '',
			visible: stories[page] ? stories[page].postcard.visible : false
		}, loading
	}
}

export default connect(mapStateToProps)(RightPage)
