import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DailyRegisterPage } from './pages/DailyRegisterPage'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { RanksPage } from './pages/RanksPage';
import { GuieAndRulesPage } from './pages/GuieAndRulesPage';
import { ProfilePage } from './pages/ProfilePage';
import { ProgressBarPage } from './pages/ProgressBarPage';
import { LeaderPage } from './pages/LeaderPage';
import { AboutDeveloperPage } from './pages/AboutDeveloperPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/about' element={<AboutDeveloperPage />} />

          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/daily/register' element={<DailyRegisterPage />} />
          <Route path='/ranks' element={<RanksPage />} />
          <Route path='/user/profile' element={<ProfilePage />} />
          <Route path='/rules' element={<GuieAndRulesPage />} />
          <Route path='/progress' element={<ProgressBarPage />} />
          <Route path='/top/leader' element={<LeaderPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
