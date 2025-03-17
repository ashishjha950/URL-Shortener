import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useGlobalContext } from './GlobalProvider';

const ProtectedRoute = ({ children }) => {
    const { apiUrl } = useGlobalContext();
    const cookies = new Cookies(); 
    
    useEffect(() => {
        const verifyToken = async () => {
            try {
                await axios.get(`${apiUrl}`, { withCredentials: true });
                const token = cookies.get('token'); 
                console.log(token);

                if (!token) {
                    toast.warning('Login to access URLs', { autoClose: 1000 });
                }
            } catch (error) {
                console.error('Error verifying token:', error);
                toast.error('Unauthorized. Redirecting to login.', { autoClose: 1000 });
            }
        };

        verifyToken();
    }, [apiUrl, cookies]);

    if (!cookies.get('token')) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
