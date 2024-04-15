import React, { createContext, useState } from 'react'

// Creation de context d'authentification
export const authContext = createContext();

function AuthProvider({children}) {
const [currentUser, setCurrentUser] = useState('')
const updateUser = user => setCurrentUser(user)

  return (
    <authContext.Provider
    value={{
        currentUser,
        updateUser
    }}
    >
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider;