import {Story} from '../../types/story'

const STORIES_FETCH_SUCCEEDED_ACTION_TYPE = 'STORIES_FETCH_SUCCEEDED'

export default interface storyAction {
	type: string,
	stories: Story[]
}

export { STORIES_FETCH_SUCCEEDED_ACTION_TYPE }
