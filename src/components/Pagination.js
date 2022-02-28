import { useState,useContext,useEffect } from 'react'
import InterviewStateContext from '../context/InterviewStateContext'
import InterviewDispatchContext from '../context/InterviewDispatchContext'
import projectList from '../projectList.json'
import PageClick from './PageClick'


const Pagination = ()=> {
  const { projectPerPage,nbOfPages,currentPage } = useContext(InterviewStateContext)
  const dispatch = useContext(InterviewDispatchContext)
  const setNbOfPages = ()=> dispatch({type:'SET_NB_OF_PAGES',payload:Math.round(projectList.length / projectPerPage)})
  const [showMorePages,setShowMorePages] = useState(false)
  useEffect(setNbOfPages,[])

  if(!nbOfPages)return null
  const pagesArray = Array.from(new Array(nbOfPages).keys())
  return (
      <section className="Pagination">
          <button
            disabled={currentPage === 1}
            onClick={()=>dispatch({type:'NAVIGATE_PAGES',payload:currentPage-1})}>prev</button>
            <article className="firstPages">
              {pagesArray
                .slice(0,3)
                .map(page=><PageClick page={page} key={`page${page}`}/>)}
            </article>
            <article className="morePages">
              <button onClick={()=>setShowMorePages(true)}>...</button>
              {showMorePages&&(
                <div onMouseLeave={()=>setShowMorePages(false)}>
                {pagesArray
                  .slice(3,pagesArray.length - 3)
                  .map(page=><PageClick page={page} key={`page${page}`}/>)}
                </div>
              )}
            </article>
            <article className="lastPages">
              {pagesArray
                .slice(pagesArray.length - 3,pagesArray.length)
                .map(page=><PageClick page={page} key={`page${page}`}/>)}
            </article>
          <button
            disabled={currentPage >= nbOfPages}
            onClick={()=>dispatch({type:'NAVIGATE_PAGES',payload:currentPage+1})}>next</button>
      </section>
    )
}
export default Pagination
