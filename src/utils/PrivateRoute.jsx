import { Navigate, Outlet } from 'react-router';


const PrivateRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

   if (!token || !allowedRoles.includes(token)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;