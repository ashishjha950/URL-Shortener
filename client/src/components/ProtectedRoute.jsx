import {useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import cookies from 'js-cookie'
import { toast } from 'react-toastify'

const ProtectedRoute = ({children}) => {
    const token = cookies.get('token',{ secure: true, sameSite: 'Strict'})
    console.log(token)

    useEffect(() => {
        if (!token) {
            toast.warning('Login to access URLs', { autoClose: 1000 });
        }
    }, [token])

   if(!token){
    return <Navigate to='/login' replace/>
    }

    return children
    
}

export default ProtectedRoute