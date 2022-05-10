import React, { useContext } from 'react'
import { useLocation , Navigation,} from 'react-router-dom';
const useAuth = () => {
    const { user } = useContext(UserContext);
    return user && user.loggedIn;
};

const ProtectRouters = () => {
    const location = useLocation()
    const isAuth = useAuth();
    return isAuth ? (
        <Outlet />
    ) : (
        <Navigation to="/" replace state={{ from: location }} />);

}

export default ProtectRouters