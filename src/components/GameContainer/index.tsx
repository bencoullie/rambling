import React from 'react'
import LeftPage from '../LeftPage'
import RightPage from '../RightPage'
import './styles.css'

const GameContainer = () => {
	return (
		<>
			<main className="page-wrapper">
				<LeftPage />
				<RightPage />
			</main>
		</>
	)
}

export default GameContainer
