import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DailyRegisterPage } from './pages/DailyRegisterPage'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { RanksPage } from './pages/RanksPage';
import { GuieAndRulesPage } from './pages/GuieAndRulesPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/daily/register' element={<DailyRegisterPage />} />
          <Route path='/ranks' element={<RanksPage />} />
          <Route path='/rules' element={<GuieAndRulesPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
