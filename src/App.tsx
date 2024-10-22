import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DailyRegisterPage } from './pages/DailyRegisterPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<DailyRegisterPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
