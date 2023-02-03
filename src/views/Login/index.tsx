// Packages:
import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../..'
import { login, USER_TYPE, validateAccountNumber } from '../../api'


// Styles:
import { Button, Input, PageHeading, PageSubtitle, PageTitle } from '../../styles'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`


// Functions:
const Login = () => {
  const navigate = useNavigate()

  // State:
  const { auth, setAuth } = useContext(AuthContext)
  const [ accountNumber, setAccountNumber ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')
  const [ isLoading, setIsLoading ] = useState(false)

  // Functions:
  const handleLogin = async () => {
    setIsLoading(true)
    setError('')
    const validationResult = validateAccountNumber(accountNumber)
    if (!validationResult.status) {
      setError(validationResult.payload as string)
      setIsLoading(false)
      return
    }
    if (password.length === 0) {
      setError('Please enter a password')
      setIsLoading(false)
      return
    }
    const loginResult = await login(BigInt(accountNumber), password)
    if (!loginResult.status) {
      setError(loginResult.payload)
      setIsLoading(false)
      return
    }
    let navigateTo = '/'
    if (loginResult.payload.userType === USER_TYPE.ADMIN) navigateTo = '/bank/home'
    if (loginResult.payload.userType === USER_TYPE.USER) navigateTo = '/user/home'
    setIsLoading(false)
    setAuth({
      accountNumber: BigInt(accountNumber),
      isLoggedIn: true
    })
    navigate(navigateTo)
  }

  // Return:
  return (
    <Wrapper>
      <PageHeading>Login to your Pepper Account</PageHeading>
      <Input type='text' placeholder='Account Number' value={ accountNumber } onChange={ (e) => setAccountNumber(e.target.value) }  />
      <Input type='password' placeholder='Password' value={ password } onChange={ (e) => setPassword(e.target.value) }  />
      <Button onClick={ handleLogin } isDisabled={ isLoading }>Login</Button>
      { error && <PageSubtitle style={{ marginTop: '0.5rem', color: '#DB5461' }}>{ error }</PageSubtitle> }
    </Wrapper>
  )
}


// Exports:
export default Login
