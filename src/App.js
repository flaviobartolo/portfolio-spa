import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import MainNavigation from './pages/components/Navigation/MainNavigation'
import LandingPage from './pages/LandingPage'
import Footer from './pages/components/Footer/Footer';

const App = () => {
  return <Router>
    <MainNavigation />
    <div className='container'>
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
    </div>
    <Footer />
  </Router>
}

export default App;
