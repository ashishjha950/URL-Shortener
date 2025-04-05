import { createContext, useContext, useEffect, useState } from 'react'
import cookies from 'js-cookie'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    useEffect(()=>{
        let token = localStorage.getItem('token')
        if(token){
            setIsLoggedIn(true)
        }
        else{
            setIsLoggedIn(false)
        }
    },[])
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)