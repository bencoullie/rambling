export interface PageContent {
  text: string
  visible: boolean
}

export interface Story {
  experience: PageContent
  postcard: PageContent
  title: string
}

export interface ApiStory {
  experience: string
  postcard: string
  title: string
}
