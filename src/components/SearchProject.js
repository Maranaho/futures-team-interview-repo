import { useContext } from 'react'
import InterviewStateContext from '../context/InterviewStateContext'
import InterviewDispatchContext from '../context/InterviewDispatchContext'



const SearchProject = ()=> {
  const { searchProject } = useContext(InterviewStateContext)
  const dispatch = useContext(InterviewDispatchContext)

  return (
      <section className="SearchProject">
        <input
          type="search"
          placeholder="Search for a project..."
          onChange={e=>dispatch({type:'SET_SEARCH_PROJECT_FILTER',payload:e.target.value})}
          value={searchProject}/>
      </section>
    )
}
export default SearchProject
