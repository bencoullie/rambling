import { PageAction } from '../../types/pageAction'

const pageReducer = (page: number = 0, { type }: PageAction) => {
	switch (type) {
		case 'TURN_PAGE_LEFT':
			return !page ? page : page - 1
		case 'TURN_PAGE_RIGHT':
			return page + 1
		default:
			return page
	}
}

export default pageReducer
