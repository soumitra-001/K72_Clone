import React, { createContext, useState } from 'react'

export const NavBarContext = createContext()

const NavContext = ({children}) => {

    
    const [NavOpen, setNavOpen] = useState(false)
  return (
    <div>
        <NavBarContext.Provider value={[NavOpen, setNavOpen]}>
            {children}
        </NavBarContext.Provider>
    </div>
  )
}

export default NavContext