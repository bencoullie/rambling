import Parser from 'rss-parser'
import parseApiStories from './parseApiStories'

let parser = new Parser()

const fetchStories = async () => {
  const rssFeedUrl =
    'https://cors-anywhere.herokuapp.com/https://medium.com/feed/@benjamincoullie'
  const jsonRssFeed = await parser.parseURL(rssFeedUrl)
  const stories = jsonRssFeed.items

  return stories && stories.length ? parseApiStories(stories.reverse()) : []
}

export default fetchStories
