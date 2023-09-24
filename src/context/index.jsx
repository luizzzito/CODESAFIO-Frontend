import { useState } from 'react'
import { formContext } from './formContext'

// eslint-disable-next-line react/prop-types
export const MyProviders = ({ children }) => {
  const [token, setToken] = useState(null)

  return (
    <formContext.Provider
      value={{
        token,
        setToken
      }}
    >
      {children}
    </formContext.Provider>
  )
}
