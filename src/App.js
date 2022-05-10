import './App.css';
import React, { useEffect } from 'react'
import Dashboard from './components/Dashboard/Dashboard';
import NoMatch from './components/NoMatch';
import { AuthProvider } from './components/Auth';

import {
  Routes,
  Route,
  useNavigate,
  useRoutes,
  Router,
  Navigate
} from 'react-router-dom';
import Login from './components/Login/Login';
import routes from './routers';
// import useSelection from 'antd/lib/table/hooks/useSelection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PrivateRoute } from './PrivateRoute';
// import CSV from './components/Export/CSV';



export default function App() {
  const history = useNavigate();
  // history.replace("/");
  // const { isLoggedIn } = useSelection((state) => state.auth);

  // const routing = useRoutes(routes(isLoggedIn));
  // useEffect(() => {
  //   AOS.init({ once: false });
  //   setTimeout(() => {
  //     AOS.refresh();
  //   }, 1000)
  // }, []);
  return (

    <div >
      {/* <Router history={history}>
        <div className="container pt-4 pb-4">
          <Routes>
            <PrivateRoute exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />\
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </div>
      </Router> */}

      <AuthProvider>
        < Routes history={history, { replace: true }}>
          <Route path="/" element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          {/* <Route exact={true} path='/usermtm' element={<CSV />} /> */}
          <Route path="*" element={<NoMatch />} />

        </Routes >
      </AuthProvider>

      {/* {routing} */}
    </div>



  );
}
