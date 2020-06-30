import { ADD_ARTICLE, DELETE_ARTICLE } from "./constants"
import { dispatch } from "./store"

const addArticle = (payload) => ({ type: ADD_ARTICLE, payload })

const deleteArticle = (payload) => ({ type: DELETE_ARTICLE, payload })

const useReduxDispatch = () => {
  const addArticleToReduxState = (title) =>
    dispatch(addArticle({ id: Date.now(), title }))

  const deleteArticleFromReduxState = (id) => dispatch(deleteArticle({ id }))

  return { addArticleToReduxState, deleteArticleFromReduxState }
}

export default useReduxDispatch
