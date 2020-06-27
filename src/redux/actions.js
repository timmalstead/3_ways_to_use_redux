import { ADD_ARTICLE, DELETE_ARTICLE, SWITCH_VISIBLE } from "./constants"

export const addArticle = (payload) => ({ type: ADD_ARTICLE, payload })

export const deleteArticle = (payload) => ({ type: DELETE_ARTICLE, payload })

export const switchBool = () => ({ type: SWITCH_VISIBLE })
