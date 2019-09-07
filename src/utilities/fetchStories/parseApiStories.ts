import { Item } from 'rss-parser'
import { Story } from '../../types/story'

const parseApiStories = (stories: Item[]): Story[] => {
  return stories.map(story => {
    const title = story.title || ''
    const rawStory = story['content:encoded']
    const strippedStory = rawStory.replace(/(<([^>]+)>)/gi, '')
    const [experience, rawPostcard] = strippedStory.split('Postcard:')
    const postcardWithoutReply = rawPostcard.replace('No need to reply', '')
    const postcardFullStop = postcardWithoutReply.replace('..', '.')
    const postcard = postcardFullStop.replace('Next.', '')

    return { experience, postcard, title }
  })
}

export default parseApiStories
