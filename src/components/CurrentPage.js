import { useContext } from 'react'
import InterviewStateContext from '../context/InterviewStateContext'
import InterviewDispatchContext from '../context/InterviewDispatchContext'



const CurrentPage = ()=> {
  const { nbOfPages,currentPage } = useContext(InterviewStateContext)

  return (
      <section className="CurrentPage">
        <span>Page: {currentPage} of {nbOfPages}</span>
      </section>
    )
}
export default CurrentPage
