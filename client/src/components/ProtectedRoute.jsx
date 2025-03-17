import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useGlobalContext } from './GlobalProvider';
import RiseLoader from 'react-spinners/RiseLoader';

const ProtectedRoute = ({ children }) => {
    const { apiUrl } = useGlobalContext();
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${apiUrl}`, { withCredentials: true });

                if (response.status === 200) {
                    setIsAuthorized(true); 
                } else {
                    throw new Error('Unauthorized');
                }
            } catch (error) {
                setIsAuthorized(false);
                toast.warning('Login to access URLs', { autoClose: 1000 });
            }
        };

        checkAuth();
    }, [apiUrl]);

    // Show loading spinner or message while authorization is checked
    if (isAuthorized === null) return <div className='flex items-center justify-center'><RiseLoader/></div>;

    // Redirect to login page if not authorized
    if (isAuthorized === false) return <Navigate to="/login" replace />;

    // Render the children if authorized
    return children;
};

export default ProtectedRoute;
