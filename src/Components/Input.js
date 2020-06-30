import React, { useState } from "react"
import useReduxDispatch from "../redux/actions"

const Input = ({ inputAndButtonStyle }) => {
  const { addArticleToReduxState } = useReduxDispatch()
  const [title, changeTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title) {
      addArticleToReduxState(title)
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

export default Input
