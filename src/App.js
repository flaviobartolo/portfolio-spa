import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import LandingPage from './pages/LandingPage'

const App = () => {
  return <Router>
    <div className='container'>
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
    </div>
  </Router>
}

export default App;
