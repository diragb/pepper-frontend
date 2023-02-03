// Packages:
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'


// Components:
import Landing from './views/Landing'
import Login from './views/Login'
import UserManagement from './views/UserManagement'
import UserHome from './views/UserManagement/Home'
import Transactions from './views/UserManagement/Transactions'
import Transfer from './views/UserManagement/Transfer'
import BankManagement from './views/BankManagement'
import BankHome from './views/BankManagement/Home'
import Users from './views/BankManagement/Users'
import CreditDebit from './views/BankManagement/CreditDebit'


// Functions:
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Landing /> } />
        <Route index path='login' element={ <Login /> } />
        <Route path='user' element={ <UserManagement /> }>
          <Route index element={ <UserHome /> } />
          <Route path='home' element={ <UserHome /> } />
          <Route path='transactions' element={ <Transactions /> } />
          <Route path='transfer' element={ <Transfer /> } />
        </Route>
        <Route path='bank' element={ <BankManagement /> }>
          <Route index element={ <BankHome /> } />
          <Route path='home' element={ <BankHome /> } />
          <Route path='users' element={ <Users /> } />
          <Route path='credit-debit' element={ <CreditDebit /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


// Exports:
export default App
