"use client"

import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState("light");

    const handleThemeChange = () => {
        if(mode === "light") { 
            setMode("dark");
            document.documentElement.classList.add("dark");
        } else {
            setMode("light");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        handleThemeChange();
    }, [mode]);  

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
