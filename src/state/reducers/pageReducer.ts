import simpleAction from '../actions/simpleAction'

const pageReducer = (state: number = 0, action: simpleAction) => action.type === 'NEXT_PAGE' ? state++ : state

export default pageReducer
