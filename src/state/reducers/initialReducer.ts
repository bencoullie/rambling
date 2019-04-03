import storyAction from '../actions/storyAction'
import state from '../../types/state'

const initialState = {
	stories: []
}

const initialReducer = (state: state = initialState, action: storyAction) => {
	if (action.type === 'STORIES_FETCH_SUCCEEDED') {
		const clonedState = { ...state }
		clonedState.stories = action.stories
		return clonedState
	}

	return state
}

export default initialReducer
