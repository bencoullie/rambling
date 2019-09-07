import { ApiStory } from '../../../types/story'

const hydrationReducer = (stories: ApiStory[] = []) =>
  stories.map(story => {
    const { experience, postcard, title } = story
    return {
      title,
      experience: {
        text: experience,
        visible: false,
      },
      postcard: {
        text: postcard,
        visible: false,
      },
    }
  })

export default hydrationReducer
