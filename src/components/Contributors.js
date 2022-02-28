import { useContext,useEffect } from 'react'
import InterviewStateContext from '../context/InterviewStateContext'

import brett from '../assets/brett.jpg'
import erin from '../assets/erin.png'
import naho from '../assets/naho.png'
import lynda from '../assets/lynda.png'
import chloe from '../assets/chloe.png'
import dave from '../assets/dave.png'

const contributorsImgs = {
  "Brett Holcomb":brett,
  "Erin Clark":erin,
  "Maranaho N'Guessan":naho,
  "Lynda Nario":lynda,
  "Chloe Walecki":chloe,
  "Dave DeMarro":dave
}

const Contributors = ()=>{
  const { activeUploaders,allUploaders } = useContext(InterviewStateContext)
  if(!allUploaders)return null
  return (
    <section className="Contributors">
      {allUploaders.map(uploader=>(
        <article key={`uploader${uploader}`}>
          <div className="imgContainer">
            <img src={contributorsImgs[uploader]} alt={uploader}/>
          </div>
          <strong>{uploader}</strong>
        </article>
      ))}
    </section>
  )
}
export default Contributors
