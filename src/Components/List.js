import React, { Fragment } from "react"
import useReduxDispatch from "../redux/actions"
import useReduxState from "../redux/selectors"

const List = ({ inputAndButtonStyle }) => {
  const { articles } = useReduxState()
  const { deleteArticleFromReduxState } = useReduxDispatch()

  return (
    <ul>
      {articles.map((article) => (
        <Fragment key={article.id}>
          <span>{article.title}</span>
          <button
            style={inputAndButtonStyle}
            onClick={() => deleteArticleFromReduxState(article.id)}
          >
            x
          </button>
        </Fragment>
      ))}
    </ul>
  )
}

export default List
