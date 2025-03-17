import {useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import cookies from 'js-cookie'
import { toast } from 'react-toastify'
import axios from 'axios'
import {useGlobalContext} from './GlobalProvider'

const ProtectedRoute = ({children}) => {
    const {apiUrl} = useGlobalContext()

    useEffect(() => {
        axios.get(`${apiUrl}`,{ withCredentials: true })
        const token = cookies.get('token',{ secure: true})
        if (!token) {
            toast.warning('Login to access URLs', { autoClose: 1000 });
        }
    }, [])

   if(!token){
    return <Navigate to='/login' replace/>
    }

    return children
    
}

export default ProtectedRoute