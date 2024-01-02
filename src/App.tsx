import { Route, Routes } from 'react-router-dom'

//Styles
import './App.css'

//Components
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import MainLayout from './components/organisms/MainLayout/MainLayout'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/user/:id"} element={<UserPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
