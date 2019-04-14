import simpleAction from '../actions/simpleAction'
import { STORIES_FETCH_SUCCEEDED_ACTION_TYPE } from '../actions/storyAction'

const loadingReducer = (loadingState: boolean = true, action: simpleAction) => action.type === STORIES_FETCH_SUCCEEDED_ACTION_TYPE ? false : loadingState

export default loadingReducer
