import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    
    if (loading) {
        return <>
            <div className=' text-center mt-40'>
                <span className="loading loading-spinner text-neutral loading-lg"></span>
            </div>
        </>
    }
    if (user) {
        return children
    }


    return <Navigate to='/login'>Login</Navigate>;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;