// Packages:
import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { USER_TYPE } from '../../api'


// Components:
import Sidebar from '../../components/Sidebar'


// Styles:
const Wrapper = styled.div`
  width: 100vw;
`

const OutletWrapper = styled.div`
  width: calc(100vw - 5.5rem);
  margin-left: 5.5rem;
`


// Functions:
const BankManagement = () => {
  return (
    <Wrapper>
      <Sidebar type={ USER_TYPE.ADMIN } />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Wrapper>
  )
}


// Exports:
export default BankManagement
