import { combineReducers } from 'redux'
import stories from './storiesReducer'
import page from './pageReducer'
import loading from './loadingReducer'

const initialState: any = {
  stories: [],
  page: 0,
  loading: true,
}

const combinedReducers = combineReducers({
  stories,
  page,
  loading,
})

export { initialState }
export default combinedReducers
