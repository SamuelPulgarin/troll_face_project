import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DailyRegisterPage } from './pages/DailyRegisterPage'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/daily/register' element={<DailyRegisterPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
