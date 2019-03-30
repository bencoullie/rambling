import React from 'react'
import LeftPage from '../LeftPage'
import RightPage from '../RightPage'
import './styles.css'

const GameLayout = () => {
	return (
		<>
			<main className="page-wrapper">
				<LeftPage />
				<RightPage />
			</main>
		</>
	)
}

export default GameLayout
