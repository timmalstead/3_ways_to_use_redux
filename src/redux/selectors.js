import { useSelector } from "react-redux"

const useReduxState = () => {
  const articles = useSelector((state) => state.articles)

  return { articles }
}

export default useReduxState
