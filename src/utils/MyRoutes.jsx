import {React, useState} from 'react';
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import SignIn from '../SignIn'
import HomePage from '../HomePage'
import CandidatePage from '../CandidatePage'

export default function MyRoutes() {
  const hh = "hirehive";
  const navigate = useNavigate();

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    navigate(`${hh}/home`);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <Routes>
      { !isLoggedIn ?
       <Route exact path={`${hh}/login`} element={<SignIn handleLoginSuccess={handleLoginSuccess}/>} />
      :
      <Route path={`${hh}/home`} element={<HomePage handleLogout={handleLogout}/>} />
      }
      <Route path={`${hh}/candidate/:id`} element={<CandidatePage/>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

