import storyAction, { STORIES_FETCH_SUCCEEDED_ACTION_TYPE } from '../actions/storyAction'
import { Story } from '../../types/story'

const storiesReducer = (existingStories: Story[] = [], { type, stories }: storyAction) => {
	switch (type) {
		case (STORIES_FETCH_SUCCEEDED_ACTION_TYPE):
			return stories.map(story => {
				const { experience, postcard } = story
				return {
					experience: {
						text: experience,
						visible: false
					},
					postcard: {
						text: postcard,
						visible: false
					},
				}
			})

		default:
			return existingStories
	}
}

export default storiesReducer
