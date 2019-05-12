import { Story } from '../../../types/story'
import cloneDeep from 'lodash/cloneDeep'
import storyAction, { UpdateStoryType } from '../../actions/storyAction'

const visibilityReducer = (
  existingStories: Story[] = [],
  {
    storyIndex = 0,
    visibility = false,
    storyType = 'postcard',
  }: storyAction<UpdateStoryType>
) => {
  const clonedStoryState = cloneDeep(existingStories)
  clonedStoryState[storyIndex][storyType].visible = visibility
  return clonedStoryState
}

export default visibilityReducer
