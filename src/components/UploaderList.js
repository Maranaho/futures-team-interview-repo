import { useContext,useEffect } from 'react'
import InterviewStateContext from '../context/InterviewStateContext'
import InterviewDispatchContext from '../context/InterviewDispatchContext'

import projectList from '../projectList.json'
import ListItem from './ListItem'

const UploaderList = ()=>{
  const dispatch = useContext(InterviewDispatchContext)
  const { activeUploaders,allUploaders } = useContext(InterviewStateContext)
  if(!allUploaders)return null

  return (
    <section className="UploaderList">
      <button onClick={()=>dispatch({type:'RESET_ALL_UPLOADERS'})} className="active">All</button>
      {allUploaders.map(uploader=>(
        <button
          onClick={()=>dispatch({type:'UPDATE_ACTIVE_UPLOADERS',payload:uploader})}
          className={activeUploaders.includes(uploader) ?'active':''}
          key={`uploader${uploader}`}>{uploader}</button>
      ))}
    </section>
  )
}
export default UploaderList
