import { ADD_ARTICLE, DELETE_ARTICLE, SWITCH_VISIBLE } from "./constants"

const initialState = {
  articles: [],
  visible: true,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: state.articles.concat(action.payload) }

    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article !== action.payload
        ),
      }

    case SWITCH_VISIBLE:
      return { ...state, visible: !state.visible }

    default:
      return state
  }
}

export default rootReducer

// const rootReducer = (state = initialState, action) => {
//   if (action.type === ADD_ARTICLE) {
//     return { ...state, articles: state.articles.concat(action.payload) }
//   }

//   if (action.type === DELETE_ARTICLE) {
//     return {
//       ...state,
//       articles: state.articles.filter((article) => article !== action.payload),
//     }
//   }

//   if (action.type === SWITCH_VISIBLE) {
//     return { ...state, visible: !state.visible }
//   }
//   return state
// }
