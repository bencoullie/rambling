import { Story } from '../../../types/story'
import cloneDeep from 'lodash/cloneDeep'
import storyAction, { UpdateStoryType } from '../../actions/storyAction'

const visibilityReducer = (
  existingStories: Story[] = [],
  {
    storyIndex = 0,
    visibility = false,
    isContentTyped = true,
    storyType = 'postcard',
  }: storyAction<UpdateStoryType>
) => {
  const clonedStoryState = cloneDeep(existingStories)
  clonedStoryState[storyIndex][storyType].visible = visibility
  clonedStoryState[storyIndex][storyType].isContentTyped =
    storyType === 'postcard' && isContentTyped
  return clonedStoryState
}

export default visibilityReducer
