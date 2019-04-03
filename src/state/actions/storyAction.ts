import story from '../../types/story'

export default interface storyAction {
	type: string,
	stories: story[]
}
