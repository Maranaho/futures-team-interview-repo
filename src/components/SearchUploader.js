import { useContext } from 'react'
import InterviewStateContext from '../context/InterviewStateContext'
import InterviewDispatchContext from '../context/InterviewDispatchContext'



const SearchUploader = ()=> {
  const { allUploaders } = useContext(InterviewStateContext)
  const dispatch = useContext(InterviewDispatchContext)
  return (
      <section className="SearchUploader">
        {allUploaders&&(
          <select onChange={e=>dispatch({type:'SET_ACTIVE_UPLOADERS',payload:[e.target.value]})}>
            <option value="All">Select contributor</option>
            {allUploaders.map(uploader=><option
              key={uploader}
              value={uploader}>{uploader}</option>)}
          </select>
        )}
      </section>
    )
}
export default SearchUploader
