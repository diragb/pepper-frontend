/* global BigInt */
// Packages:
import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../..'
import { fetchBankDetails } from '../../../api'


// Styles:
import { PageHeading, PageSubtitle, PageTitle } from '../../../styles'

const Wrapper = styled.div`
  padding: 2rem;
`


// Functions:
const Home = () => {
  // State:
  const [ bankDetails, setBankDetails ] = useState({
    totalAmount: 0,
    users: 0
  })

  // Functions:
  const getBankDetails = async () => {
    const details = await fetchBankDetails()
    setBankDetails(details)
  }

  // Effects:
  useEffect(() => {
    getBankDetails()
  }, [])
  
  // Return:
  return (
    <Wrapper>
      <PageTitle>Home</PageTitle>
      <PageSubtitle>Welcome back to Pepper, Admin!</PageSubtitle>
      <PageHeading style={{ marginTop: '2rem' }}>Total Account In Bank</PageHeading>
      <PageTitle>${ bankDetails.totalAmount }</PageTitle>
      <PageHeading style={{ marginTop: '2rem' }}>Number Of Users</PageHeading>
      <PageTitle>{ bankDetails.users }</PageTitle>
    </Wrapper>
  )
}


// Exports:
export default Home
