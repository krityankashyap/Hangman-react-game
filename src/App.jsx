import { Route, Routes } from 'react-router-dom'
import './App.css'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import StartGame from './pages/Startgame'
import PlayGame from './pages/PlayGame'

function App() {

  return (
 <Routes>
  <Route path='/start' element={<StartGame />}/>
  <Route path='/play' element={<PlayGame />}/>
 </Routes>
  )
}

export default App
