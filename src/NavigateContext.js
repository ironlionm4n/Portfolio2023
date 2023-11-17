import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavigateContext = createContext();

export const useNavigateContext = () => useContext(NavigateContext);

export const NavigateProvider = ({ children }) => {
    const navigate = useNavigate();

    return (
        <NavigateContext.Provider value={navigate}>
            {children}
        </NavigateContext.Provider>
    )
}