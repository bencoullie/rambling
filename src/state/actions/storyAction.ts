import story from '../../types/story'

const STORIES_FETCH_SUCCEEDED_ACTION_TYPE = 'STORIES_FETCH_SUCCEEDED'

export default interface storyAction {
	type: string,
	stories: story[]
}

export { STORIES_FETCH_SUCCEEDED_ACTION_TYPE }
