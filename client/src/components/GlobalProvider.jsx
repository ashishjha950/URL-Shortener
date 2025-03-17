import { useState, createContext, useContext } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL

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
