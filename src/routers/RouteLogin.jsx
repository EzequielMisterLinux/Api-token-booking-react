import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeUser from '../components/HomeUser';

export default function RouteLogin() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/home-user' element={<HomeUser />} />
      </Routes>
    </BrowserRouter>
  );
}
