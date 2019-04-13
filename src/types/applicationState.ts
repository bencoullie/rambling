import story from './story'

export default interface applicationState {
	stories: story[] | []
	page: number,
	loading: boolean
}
