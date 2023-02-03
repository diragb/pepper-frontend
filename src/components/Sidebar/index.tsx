// Packages:
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { USER_TYPE } from '../../api'


// Imports:
import { IoMdHome } from 'react-icons/io'
import { AiOutlineTransaction, AiFillCreditCard } from 'react-icons/ai'
import { IoSend } from 'react-icons/io5'
import { FaUsers } from 'react-icons/fa'
import { RiLogoutBoxFill } from 'react-icons/ri'
import { AuthContext } from '../..'
import { useContext } from 'react'


// Styles:
const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 5.5rem;
  height: calc(100% - 2rem);
  padding: 1rem 0;
  background-color: #2E3532;
  /* background-color: #DB5461; */
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 3rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  user-select: none;
  cursor: pointer;
`

const SidebarRoute = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.6rem;
  font-weight: 500;
  color: white;
  user-select: none;
  cursor: pointer;
`


// Functions:
const Sidebar = (props: { type: USER_TYPE }) => {
  // Constants:
  const { setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  // Return:
  return (
    <Wrapper>
      <Logo onClick={ () => navigate('/') }>
        <span style={{ fontSize: '1.5rem' }}>🌶️</span><span>PEPPER</span>
      </Logo>
      {
        props.type === USER_TYPE.USER ? (
          <>
          <SidebarRoute onClick={ () => navigate('/user/home') }>
            <IoMdHome size={ '2rem' } color={ 'white' } />
            Home
          </SidebarRoute>
          <SidebarRoute onClick={ () => navigate('/user/transactions') }>
            <AiOutlineTransaction size={ '2rem' } color={ 'white' } />
            Transactions
          </SidebarRoute>
          <SidebarRoute onClick={ () => navigate('/user/transfer') }>
            <IoSend size={ '1.5rem' } color={ 'white' } />
            Transfer
          </SidebarRoute>
          </>
        ) : (
          <>
            <SidebarRoute onClick={ () => navigate('/bank/home') }>
              <IoMdHome size={ '2rem' } color={ 'white' } />
              Home
            </SidebarRoute>
            <SidebarRoute onClick={ () => navigate('/bank/users') }>
              <FaUsers size={ '2rem' } color={ 'white' } />
              Users
            </SidebarRoute>
            <SidebarRoute onClick={ () => navigate('/bank/credit-debit') }>
              <AiFillCreditCard size={ '1.5rem' } color={ 'white' } />
              Credit/Debit
            </SidebarRoute>
          </>
        )
      }
      <SidebarRoute onClick={ () => {
        setAuth({
          accountNumber: null,
          isLoggedIn: false
        })
        navigate('/')
      } }>
        <RiLogoutBoxFill size={ '1.5rem' } color={ 'white' } />
        Logout
      </SidebarRoute>
    </Wrapper>
  )
}


// Exports:
export default Sidebar
