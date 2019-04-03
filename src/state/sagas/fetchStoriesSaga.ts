import { call, put, fork } from 'redux-saga/effects'
import fetchStories from '../../utilities/fetchStories'
import story from '../../types/story'

function* fetchStoriesSaga () {
	try {
		const stories: [story[] | []] = yield call(fetchStories)

		if (!stories.length) {
			throw new Error('No stories found.')
		}

		yield put({ type: 'STORIES_FETCH_SUCCEEDED', stories })
	} catch (error) {
		console.log('Fetch user saga error: ', error)
	}
}

function* watchStoriesSaga () {
	yield fork(fetchStoriesSaga)
}

export default watchStoriesSaga
