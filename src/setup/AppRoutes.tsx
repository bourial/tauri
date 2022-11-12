import { Routes, Route, Outlet } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
