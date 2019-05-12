import { ApiStory } from '../../types/story'

const UPDATE_STORY_VISIBILITY_ACTION_TYPE = 'UPDATE_STORY_VISIBILITY'
const STORIES_FETCH_SUCCEEDED_ACTION_TYPE = 'STORIES_FETCH_SUCCEEDED'

export default interface storyAction<T = string> {
  type: T
  stories?: ApiStory[]
  storyIndex?: number
  visibility?: boolean
  storyType?: 'postcard' | 'experience'
}

// const updateVisibilityActionCreator = ({
//   type,
//   storyIndex,
//   visibility,
//   storyType,
// }: storyAction) => ({
//   type,
//   storyIndex
// })

export {
  UPDATE_STORY_VISIBILITY_ACTION_TYPE,
  STORIES_FETCH_SUCCEEDED_ACTION_TYPE,
}
