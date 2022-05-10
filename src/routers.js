import { Navigate,Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
// import CSV from './components/Export/CSV';
import Login from './components/Login/Login'
const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <Dashboard /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      // { path: '/account', element: <CSV/> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      {
        path: 'member',
        element: <Outlet />,
        // children: [
        //   { path: '/', element: <MemberGrid /> },
        //   { path: '/add', element: <AddMember /> },
        // ],
      },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <Dashboard/> : <Navigate to="/app/dashboard" />,
    children: [
      { path: 'login', element: <Login/> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;