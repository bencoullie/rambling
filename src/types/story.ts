export interface PageContent {
	text: string
	visible: boolean
}

export interface Story {
	experience: PageContent
	postcard: PageContent
}

export interface ApiStory {
	experience: string
	postcard: string
}
