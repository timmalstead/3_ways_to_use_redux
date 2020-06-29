import React, { Fragment } from "react"
import { connect } from "react-redux"
import { deleteArticle } from "../redux/actions"

const unConnectedList = ({ articles, deleteArticle, inputAndButtonStyle }) => (
  <ul>
    {articles.map((article) => (
      <Fragment key={article.id}>
        <span>{article.title}</span>
        <button
          style={inputAndButtonStyle}
          onClick={() => deleteArticle({ id: article.id })}
        >
          x
        </button>
      </Fragment>
    ))}
  </ul>
)

const mapStateToProps = (state) => ({ articles: state.articles })

const mapDispatchToProps = (dispatch) => ({
  deleteArticle: (article) => dispatch(deleteArticle(article)),
})

const List = connect(mapStateToProps, mapDispatchToProps)(unConnectedList)

export default List
