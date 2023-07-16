import React from 'react';
import {Route, Routes} from 'react-router-dom'
import SignIn from '../SignIn'
import HomePage from '../HomePage'
import CandidatePage from '../CandidatePage'

export default function MyRoutes() {
  const hh = "hirehive";

  return (
    <Routes>
      <Route index path={`/`} element={<SignIn />} />
      <Route path={`/home`} element={<HomePage />} />
      <Route path={`/candidate/:id`} element={<CandidatePage/>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

