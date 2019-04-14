import { call, put } from 'redux-saga/effects'
import fetchStories from '../../utilities/fetchStories'
import { Story } from '../../types/story'
import { STORIES_FETCH_SUCCEEDED_ACTION_TYPE } from '../actions/storyAction'

function* fetchStoriesSaga () {
	try {
		const stories: [Story[] | []] = yield call(fetchStories)

		if (!stories.length) {
			throw new Error('No stories found.')
		}

		yield put({ type: STORIES_FETCH_SUCCEEDED_ACTION_TYPE, stories })
	} catch (error) {
		throw new Error(`Fetch user saga error: ${error}`)
	}
}

export default fetchStoriesSaga
