import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from '../SignIn'
import HomePage from '../HomePage'
import CandidatePage from '../CandidatePage'

export default function MyRoutes() {
  const hh = "hirehive";
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path={`${hh}/login`} element={<SignIn/>} />
      <Route path={`${hh}/home`} element={<HomePage/>} />
      <Route path={`${hh}/candidate/:id`} element={<CandidatePage/>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
    </BrowserRouter>
  )
}

