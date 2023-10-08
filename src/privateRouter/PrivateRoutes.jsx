import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const {user, loading } = useContext(AuthContext);
    if (loading) {
        return <p className=' bg-red-500'>loading....</p>
    }
    if (user) {
        return children;
    }


    return <Navigate to='/login'>Login</Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;