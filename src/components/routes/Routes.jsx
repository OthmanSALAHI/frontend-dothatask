import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';

const Routers = () => {
  return (
    <Routes>
        <Route path="/login" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
    </Routes>
  );
};

export default Routers;
