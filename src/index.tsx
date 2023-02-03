// Packages:
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import reportWebVitals from './reportWebVitals'


// Components:
import App from './App'
import { useState } from 'react'


// Styles:
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #2E3532;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

// Functions:
export const AuthContext = createContext({
  auth: {
    accountNumber: null,
    isLoggedIn: false
  },
  setAuth: (_newAuth: any) => {}
})

const AuthContextHandler = (props: any) => {
  // State:
  const [ auth, setAuth ] = useState({
    accountNumber: null,
    isLoggedIn: false
  })

  // Return:
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      { props.children }
    </AuthContext.Provider>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <AuthContextHandler>
      <GlobalStyle />
      <App />
    </AuthContextHandler>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
