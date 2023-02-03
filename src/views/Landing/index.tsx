// Packages:
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


// Styles:
import { Button, PageSubtitle, PageTitle } from '../../styles'

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
const Landing = () => {
  // Constants:
  const navigate = useNavigate()

  // Return:
  return (
    <Wrapper>
      <PageTitle>Pepper 🌶️</PageTitle>
      <PageSubtitle>A new banking experience</PageSubtitle>
      <Button onClick={ () => navigate('/login') }>Login</Button>
    </Wrapper>
  )
}


// Exports:
export default Landing
