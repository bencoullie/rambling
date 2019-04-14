import React, { useEffect, Dispatch } from 'react'
import LeftPage from '../LeftPage'
import RightPage from '../RightPage'
import './styles.css'
import { connect } from 'react-redux'
import pageActionCreator from '../../state/actions/pageAction'
import { PageAction } from '../../types/pageAction'

interface GameContainerProps {
	dispatch: Dispatch<PageAction>
}

const GameContainer = ({ dispatch }: GameContainerProps) => {
	useEffect(() => {
		document.addEventListener('keyup', handleKeyPress)
		return () => { document.removeEventListener('keyup', handleKeyPress) }
	})

	const handleKeyPress = ({ key }: KeyboardEvent) => {
		switch (key) {
			case 'ArrowLeft':
				console.log('Left pressed!')
				dispatch(pageActionCreator('TURN_PAGE_LEFT'))
				break
			case 'ArrowRight':
				console.log('Right pressed!')
				dispatch(pageActionCreator('TURN_PAGE_RIGHT'))
				break
		}
	}

	return (
		<>
			<main className="page-wrapper">
				<LeftPage />
				<RightPage />
			</main>
		</>
	)
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(GameContainer)
