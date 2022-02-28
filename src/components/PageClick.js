import { useContext } from 'react'
import InterviewDispatchContext from '../context/InterviewDispatchContext'
import InterviewStateContext from '../context/InterviewStateContext'

const PageClick = ({page}) => {
  const {currentPage} = useContext(InterviewStateContext)
  const dispatch = useContext(InterviewDispatchContext)
  return (
    <button
    className={`PageClick ${currentPage === page+1 ? 'current':''}`}
    onClick={()=>dispatch({type:'NAVIGATE_PAGES',payload:page+1})}>{page+1}</button>
  )
}

export default PageClick
