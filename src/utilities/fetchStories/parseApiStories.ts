import { Item } from 'rss-parser'
import story from '../../types/story'

const parseApiStories = (stories: Item[]): story[] => {
	return stories.map(story => {
		const rawStory = story['content:encoded']
		const strippedStory = rawStory.replace(/(<([^>]+)>)/ig, "")
		const [experience, rawPostcard] = strippedStory.split('Postcard:')
		const postcard = rawPostcard.replace('No need to reply.Next.', '')

		return { experience, postcard }
	})
}

export default parseApiStories
