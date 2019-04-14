import { PageActionType } from "../../types/pageAction"

const pageActionCreator = (type: PageActionType, numberOfStories: number) => ({ type, numberOfStories })

export default pageActionCreator

