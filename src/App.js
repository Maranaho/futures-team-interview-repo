import { useReducer } from 'react'
import InterviewStateContext from './context/InterviewStateContext'
import InterviewDispatchContext from './context/InterviewDispatchContext'
import InterviewReducer, { initialInterviewState } from './reducers/InterviewReducer'

import TopBar from './components/TopBar'
import ProjectList from './components/ProjectList'
import Pagination from './components/Pagination'
import UploaderList from './components/UploaderList'
import SearchProject from './components/SearchProject'
import CurrentPage from './components/CurrentPage'
import SearchUploader from './components/SearchUploader'
import Contributors from './components/Contributors'

import './App.css'
const App = ()=> {

  const [ state, dispatch ] = useReducer(InterviewReducer, initialInterviewState)
  const { searchProject,view,allUploaders,activeUploaders } = state
  const showPagination = searchProject === '' && allUploaders.length === activeUploaders.length

  return (
    <InterviewDispatchContext.Provider value={dispatch}>
      <InterviewStateContext.Provider value={state}>

        <main className="App">

          <section>

            <header>
              <TopBar/>
              {view === 'projects'&&(
                <div>
                  <SearchProject/>
                  <UploaderList/>
                  <SearchUploader/>
                </div>
              )}
              {showPagination && <CurrentPage/>}
            </header>

            {view === 'projects' ?<ProjectList/>:<Contributors/>}
          </section>
          {showPagination && <Pagination/>}
        </main>

    </InterviewStateContext.Provider>
    </InterviewDispatchContext.Provider>
  )
}

export default App
