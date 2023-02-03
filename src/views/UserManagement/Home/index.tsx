/* global BigInt */
// Packages:
import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../..'
import { fetchUser } from '../../../api'


// Styles:
import { PageHeading, PageSubtitle, PageTitle } from '../../../styles'

const Wrapper = styled.div`
  padding: 2rem;
`


// Functions:
const Home = () => {
  // State:
  const { auth } = useContext(AuthContext)
  const [ user, setUser ] = useState<any>()

  // Functions:
  const getUserAccountDetails = async () => {
    if (auth.accountNumber === null) return
    const userDetails = await fetchUser(auth.accountNumber)
    setUser(userDetails)
  }

  // Effects:
  useEffect(() => {
    getUserAccountDetails()
  }, [])
  
  // Return:
  return (
    <Wrapper>
      <PageTitle>Home</PageTitle>
      <PageSubtitle>Welcome back to Pepper, User!</PageSubtitle>
      <PageHeading style={{ marginTop: '2rem' }}>Current Account Balance</PageHeading>
      <PageTitle>${ user?.amount }</PageTitle>
      <PageHeading style={{ marginTop: '2rem' }}>Account Number</PageHeading>
      <PageTitle>{ user?.accountNumber.toString() }</PageTitle>
    </Wrapper>
  )
}


// Exports:
export default Home
