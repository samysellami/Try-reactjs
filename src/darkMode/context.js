import React, {useContext, useState} from 'react'


const defaultContexData = {
    isDark:false, 
    toggle: () =>{}
}

export const DarkModeContext = React.createContext(defaultContexData)
export const useDarkMode = () => useContext(DarkModeContext)

export const DarkModeprovider = props =>{

    const [isDark, setIsDark] = useState(false)
    const toggle = () =>{
        setIsDark(!isDark)
    }

    return <DarkModeContext.Provider value = {{
        isDark: isDark,
        toggle : toggle,
    }}>
        {props.children}
    </DarkModeContext.Provider>
}