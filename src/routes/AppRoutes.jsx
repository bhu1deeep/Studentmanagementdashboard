// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';

import EditStudent from '../pages/EditStudent';
import StudentDetail from '../components/StudentDetail';
import CreateStudent from '../pages/CreateStudent.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<CreateStudent/>} />
    <Route path="/student/:id" element={<StudentDetail />} />
    <Route path="/student/:id/edit" element={<EditStudent />} />
  </Routes>
);

export default AppRoutes;
