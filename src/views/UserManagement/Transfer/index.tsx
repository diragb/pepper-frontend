// Packages:
import React, { useContext } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../..'
import { transferFunds, validateAccountNumber } from '../../../api'


// Styles:
import { Button, Input, PageSubtitle, PageTitle } from '../../../styles'

const Wrapper = styled.div`
  padding: 2rem;
`


// Functions:
const Transfer = () => {
  // State:
  const { auth } = useContext(AuthContext)
  const [ accountNumber, setAccountNumber ] = useState('')
  const [ amount, setAmount ] = useState(0)
  const [ error, setError ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)
  const [ transferSuccessful, setTransferSuccessful ] = useState(false)

  // Functions:
  const handleTransferFunds = async () => {
    setIsLoading(true)
    setError('')
    setTransferSuccessful(false)
    if (amount <= 0) {
      setError('Amount needs to be more than 0.')
      setIsLoading(false)
      return
    }
    const validationResult = validateAccountNumber(accountNumber)
    if (validationResult.status === false) {
      setError(validationResult.payload as string)
      setIsLoading(false)
      return
    }
    if (auth.accountNumber === null) {
      setError('You are not signed in!')
      setIsLoading(false)
      return
    }
    const result = await transferFunds(auth.accountNumber, validationResult.payload as bigint, amount)
    if (!result.status) {
      setError(result.payload)
      setIsLoading(false)
      return
    }
    setTransferSuccessful(true)
    setIsLoading(false)
  }

  // Return:
  return (
    <Wrapper>
      <PageTitle>Transfer</PageTitle>
      <PageSubtitle style={{ marginBottom: '0.5rem' }}>Send funds to an account number</PageSubtitle>
      <Input type='number' placeholder='Account Number' value={ accountNumber } onChange={ (e) => setAccountNumber(e.target.value) } />
      <br />
      <Input type='number' placeholder='Amount' value={ amount } onChange={ (e) => setAmount(e.target.value ? parseFloat(e.target.value) : 0) } />
      <Button onClick={ handleTransferFunds } isDisabled={ isLoading } style={{ margin: '0.5rem 0' }}>Transfer</Button>
      { transferSuccessful && <PageSubtitle style={{ marginTop: '0.5rem', fontWeight: 700 }}>Transfer successful!</PageSubtitle> }
      { error && <PageSubtitle style={{ marginTop: '0.5rem', color: '#DB5461' }}>{ error }</PageSubtitle> }
    </Wrapper>
  )
}


// Exports:
export default Transfer
