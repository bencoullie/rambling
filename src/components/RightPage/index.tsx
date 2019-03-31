import React from 'react'
import { connect } from 'react-redux';
import state from '../../state/types/state'
import './styles.css'

interface letterPageProps {
	letter: string
}

const RightPage = ({ letter }: letterPageProps) => {
	return (
		<section className="page page--right-side">
			<div className="page__content">
				<p>{letter}</p>
			</div>
		</section>
	)
}

function mapStateToProps (state: state) {
	return {
		letter: state.stories[0].letter
	};
}

export default connect(mapStateToProps)(RightPage);
