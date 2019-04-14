import { Story } from './story'

export default interface ApplicationState {
	stories: Story[] | []
	page: number,
	loading: boolean
}
