import { Route,Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'
import QuizPage from './Components/QuizPage'

function App() {
 

  return (
    <>
  <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/quiz' element={<QuizPage/>}></Route>
  </Routes>
   
    </>
  )
}

export default App
