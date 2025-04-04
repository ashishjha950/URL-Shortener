import { useState, createContext, useContext } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl ='https://url-shortener-xzd7.onrender.com/api'

  return (
    <GlobalContext.Provider value={{isLoading, setIsLoading,apiUrl }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
