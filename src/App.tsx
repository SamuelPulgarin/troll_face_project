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
import { MessageInbox } from './pages/MessageInbox';
import { AboutAdminPage } from './pages/AboutAdminPage';
import { BadgesPage } from './pages/BadgesPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/about/developer' element={<AboutDeveloperPage />} />
          <Route path='/about' element={<AboutAdminPage />} />

          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/daily/register' element={<DailyRegisterPage />} />
          <Route path='/ranks' element={<RanksPage />} />
          <Route path='/user/profile' element={<ProfilePage />} />
          <Route path='/rules' element={<GuieAndRulesPage />} />
          <Route path='/progress' element={<ProgressBarPage />} />
          <Route path='/top/leader' element={<LeaderPage />} />
          <Route path='/message' element={<MessageInbox />} />
          <Route path='/badges' element={<BadgesPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
