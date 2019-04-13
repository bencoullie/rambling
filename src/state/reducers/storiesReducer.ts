import storyAction, { STORIES_FETCH_SUCCEEDED_ACTION_TYPE } from '../actions/storyAction'
import Story from '../../types/story'

const storiesReducer = (stories: Story[] = [], action: storyAction) => action.type === STORIES_FETCH_SUCCEEDED_ACTION_TYPE ? action.stories : stories

export default storiesReducer
