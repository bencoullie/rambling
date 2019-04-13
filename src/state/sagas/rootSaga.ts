import { fork } from 'redux-saga/effects'
import fetchStoriesSaga from './fetchStoriesSaga'

function* rootSaga () {
	yield fork(fetchStoriesSaga)
}

export default rootSaga
