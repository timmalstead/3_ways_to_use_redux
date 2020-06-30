import { ADD_ARTICLE, DELETE_ARTICLE } from "./constants"

const initialState = {
  articles: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: state.articles.concat(action.payload) }

    case DELETE_ARTICLE:
      return {
        ...state,
        articles: [
          ...state.articles.filter(
            (article) => article.id !== action.payload.id
          ),
        ],
      }

    default:
      return state
  }
}

export default rootReducer
