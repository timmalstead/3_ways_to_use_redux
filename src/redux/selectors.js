import { useState, useEffect } from "react"
import { getState, subscribe } from "./store"

const useReduxState = () => {
  const [articles, changeArticles] = useState([])

  useEffect(() => subscribe(() => changeArticles(getState().articles)), [
    getState().articles,
  ])

  return { articles }
}

export default useReduxState
