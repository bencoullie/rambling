import storyAction, {
  STORIES_FETCH_SUCCEEDED_ACTION_TYPE,
  UPDATE_STORY_VISIBILITY_ACTION_TYPE,
  UpdateStoryType,
} from '../../actions/storyAction'
import { Story } from '../../../types/story'
import hydrationReducer from './hydrationReducer'
import visibilityReducer from './visibilityReducer'

const storiesReducer = (existingStories: Story[] = [], action: storyAction) => {
  const { type, stories } = action

  switch (type) {
    case STORIES_FETCH_SUCCEEDED_ACTION_TYPE:
      return hydrationReducer(stories)

    case UPDATE_STORY_VISIBILITY_ACTION_TYPE:
      return visibilityReducer(existingStories, action as storyAction<
        UpdateStoryType
      >)

    default:
      return existingStories
  }
}

export default storiesReducer
