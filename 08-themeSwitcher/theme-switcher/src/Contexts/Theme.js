import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode: "light",
    darkMode: () => {},
    lightTheme: () => {}
});
// ki context jab pehli baar bane toh kya kya default value ho pehle se


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
} 