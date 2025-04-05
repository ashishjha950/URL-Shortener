import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import RiseLoader from 'react-spinners/RiseLoader';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const [isAuthorized, setIsAuthorized] = useState(undefined);

    useEffect(() => {
        setIsAuthorized(isLoggedIn);
        if (!isLoggedIn) {
            toast.warning('Login to access URLs', { autoClose: 1000 });
        }
    }, [isLoggedIn]);

    if (isAuthorized === undefined) return (
        <div className='flex items-center justify-center'>
            <RiseLoader />
        </div>
    );

    return isAuthorized ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;