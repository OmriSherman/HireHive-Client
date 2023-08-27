import './index.css';
import { useState } from "react";
import SignIn from './SignIn'
import HomePage from './HomePage'
import CandidatePage from './CandidatePage';
import EmployerPage from './EmployerPage';
import UpdateInfo from './UpdateInfo';
import {Route, Routes, Navigate } from 'react-router-dom'

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLoginSuccess = (data) => {
    setLoggedIn(true);
    sessionStorage.setItem('user', JSON.stringify(data));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.clear();
  };
  return (
    <div className='App'>
      <EmployerPage id={13}/>
    <Routes>
      <Route path="/" element={!isLoggedIn ? <SignIn handleLoginSuccess={handleLoginSuccess} /> : <Navigate to="/home" />} />
      <Route path="/home" element={isLoggedIn ? <HomePage handleLogout={handleLogout}/> : <Navigate to="/" />} />
      <Route path={`/candidate/:id`} element={<CandidatePage/>} />
      <Route path={`/employer/:id`} element={<EmployerPage/>} />
      <Route path={`/update/:id`} element={<UpdateInfo/>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
    </div>
  );
}

export default App
