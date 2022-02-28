import projectList from '../projectList.json'
const allUploaders = [... new Set(projectList.map(project=>project.uploader))]
let initialInterviewState = {
  projectPerPage:15,
  currentPage:1,
  searchProject:"",
  searchUploader:"All",
  view:"projects",
  nbOfPages:null,
  allUploaders,
  activeUploaders:[... new Set(projectList.map(project=>project.uploader))],

}
const InterviewReducer = (state, action) => {
  switch (action.type) {

    case 'SET_NB_OF_PAGES':
      let SET_NB_OF_PAGES = {...state}
      SET_NB_OF_PAGES.nbOfPages = action.payload
    return SET_NB_OF_PAGES;

    case 'NAVIGATE_PAGES':
      let NAVIGATE_PAGES = {...state}
      NAVIGATE_PAGES.currentPage = action.payload
    return NAVIGATE_PAGES;

    case 'RESET_ALL_UPLOADERS':
      let RESET_ALL_UPLOADERS = {...state}
      RESET_ALL_UPLOADERS.activeUploaders = [...allUploaders]
    return RESET_ALL_UPLOADERS;

    case 'SET_ACTIVE_UPLOADERS':
      let SET_ACTIVE_UPLOADERS = {...state}
      if(action.payload[0] === 'All') SET_ACTIVE_UPLOADERS.activeUploaders = [... allUploaders]
      else SET_ACTIVE_UPLOADERS.activeUploaders = action.payload
    return SET_ACTIVE_UPLOADERS;

    case 'UPDATE_ACTIVE_UPLOADERS':
      let UPDATE_ACTIVE_UPLOADERS = {...state}
      const idxOfUploader = UPDATE_ACTIVE_UPLOADERS.activeUploaders.indexOf(action.payload)
      if(idxOfUploader === -1) UPDATE_ACTIVE_UPLOADERS.activeUploaders.push(action.payload)
      else UPDATE_ACTIVE_UPLOADERS.activeUploaders.splice(idxOfUploader,1)
    return UPDATE_ACTIVE_UPLOADERS;

    case 'TOGGLE_VIEW':
      let TOGGLE_VIEW = {...state}
      TOGGLE_VIEW.view = action.payload
    return TOGGLE_VIEW;

    case 'SET_SEARCH_UPLOADER_FILTER':
      let SET_SEARCH_UPLOADER_FILTER = {...state}
      SET_SEARCH_UPLOADER_FILTER.searchUploader = action.payload
    return SET_SEARCH_UPLOADER_FILTER;

    case 'SET_SEARCH_PROJECT_FILTER':
      let SET_SEARCH_PROJECT_FILTER = {...state}
      SET_SEARCH_PROJECT_FILTER.searchProject = action.payload
    return SET_SEARCH_PROJECT_FILTER;


    default: throw new Error('Unexpected action');
  }
}

export default InterviewReducer
export { initialInterviewState }
