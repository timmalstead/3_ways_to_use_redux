import React, { useState } from "react"
import { connect } from "react-redux"
import { addArticle } from "../redux/actions"

const UnconectedInput = ({ addArticle, inputAndButtonStyle }) => {
  const [title, changeTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title) {
      addArticle({ id: Date.now(), title })
      changeTitle("")
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        autoFocus
        type="text"
        value={title}
        onChange={(e) => changeTitle(e.target.value)}
        style={{ ...inputAndButtonStyle, width: "20em" }}
      />
      <button type="submit" style={inputAndButtonStyle}>
        Add
      </button>
    </form>
  )
}

const Input = connect(null, (dispatch) => ({
  addArticle: (article) => dispatch(addArticle(article)),
}))(UnconectedInput)

export default Input
