import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

function App() {

  return (
    <>
     <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/user/:id"} element={<UserPage />} />
     </Routes>
    </>
  )
}

export default App
