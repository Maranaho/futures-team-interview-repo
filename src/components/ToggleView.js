import { useContext } from 'react'
import InterviewDispatchContext from '../context/InterviewDispatchContext'

const ToggleView = ()=> {
  const dispatch = useContext(InterviewDispatchContext)

  return (
      <article className="ToggleView">
        <button onClick={()=>dispatch({type:'TOGGLE_VIEW',payload:'projects'})}>Projects</button>
        <button onClick={()=>dispatch({type:'TOGGLE_VIEW',payload:'uploader'})}>Uploader</button>
        </article>
    )
}
export default ToggleView
