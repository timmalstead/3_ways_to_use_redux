import { createStore } from "redux"
import rootReducer from "./reducers"

const store = createStore(rootReducer)

export const { getState, subscribe, dispatch } = store
