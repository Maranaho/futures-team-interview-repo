import { useContext } from 'react'
import InterviewStateContext from '../context/InterviewStateContext'

import projectList from '../projectList.json'
import ListItem from './ListItem'

const ProjectList = ()=>{
  const { projectPerPage,currentPage,searchProject,activeUploaders } = useContext(InterviewStateContext)
  const nbOfPages = Math.round(projectList.length / projectPerPage)
  const startRange = currentPage * projectPerPage
  const endRange = (startRange + projectPerPage)

  const pagesArray = Array.from(new Array(nbOfPages).keys())
  const filteredProjectList = projectList
    .filter(project=>activeUploaders.indexOf(project.uploader) !== -1)
    .filter(project=>project.name.toLowerCase().indexOf(searchProject.toLowerCase()) !== -1)
  const listTooSmall = filteredProjectList.length < startRange
  const sortByDate = (a,b)=>{
    return new Date(b.date_added) - new Date(a.date_added)
  }

  if(!filteredProjectList.length)return <p className="nothingToShow">No project was found :(</p>
  return (
    <section className="ProjectList">
      {listTooSmall ? (
        filteredProjectList
        .sort((a,b)=>sortByDate(a,b))
        .map(project=><ListItem key={project.id} project={project}/>)
      ):(
        filteredProjectList
        .sort((a,b)=>sortByDate(a,b))
          .map(project=><ListItem key={project.id} project={project}/>)
          .slice(startRange,endRange)
      )}
    </section>
  )
}
export default ProjectList
