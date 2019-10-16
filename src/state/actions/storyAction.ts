import { ApiStory } from '../../types/story'

const UPDATE_STORY_VISIBILITY_ACTION_TYPE = 'UPDATE_STORY_VISIBILITY'
const STORIES_FETCH_SUCCEEDED_ACTION_TYPE = 'STORIES_FETCH_SUCCEEDED'

export type UpdateStoryType = 'UPDATE_STORY_VISIBILITY'
export type StoriesFetchedType = 'STORIES_FETCH_SUCCEEDED'

export default interface storyAction<T = string> {
  type: T
  stories?: ApiStory[]
  storyIndex?: number
  visibility?: boolean
  isContentTyped?: boolean
  storyType?: 'postcard' | 'experience'
}

export {
  UPDATE_STORY_VISIBILITY_ACTION_TYPE,
  STORIES_FETCH_SUCCEEDED_ACTION_TYPE,
}
