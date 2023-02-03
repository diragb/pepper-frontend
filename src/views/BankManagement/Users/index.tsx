// Packages:
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { fetchUsers } from '../../../api'


// Styles:
import { Button, PageSubtitle, PageTitle } from '../../../styles'

const Wrapper = styled.div`
  padding: 2rem;
`

const UserRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-weight: 500;
`


// Functions:
const UserRow = (props: { user: any, index: number }) => {
  return (
    <UserRowWrapper style={{ backgroundColor: props.index % 2 === 0 ? '#f1a8af' : '#f1c7cb' }}>
      <UserColumn style={{ width: '50%' }}>{ props.user.accountNumber.toString() }</UserColumn>
      <UserColumn style={{ width: '50%' }}>${ props.user.amount }</UserColumn>
    </UserRowWrapper>
  );
}

const Users = () => {
  // State:
  const [ users, setUsers ] = useState<any[]>([])

  // Functions:
  const getUsers = async () => {
    const fetchedUsers = await fetchUsers()
    setUsers(fetchedUsers)
  }
  
  const simulateUserAdd = () => {
    const newUser = {
      accountNumber: BigInt(Math.floor(Math.random() * 1E16)),
      amount: 0
    }
    setUsers(_users => [ ..._users, newUser ])
  }

  // Effects:
  useEffect(() => {
    getUsers()
  }, [])

  // Return:
  return (
    <Wrapper>
      <PageTitle>Users</PageTitle>
      <PageSubtitle>Here are the users using our banking service..</PageSubtitle>
      <Button onClick={ simulateUserAdd } style={{ marginTop: '1rem' }}>Add User</Button>
      {
        users.length > 0 ? (
          <>
            <UserRowWrapper style={{ marginTop: '2rem', backgroundColor: '#DB5461', color: 'white' }}>
              <UserColumn style={{ width: '50%', fontWeight: 700 }}>Account Number</UserColumn>
              <UserColumn style={{ width: '50%', fontWeight: 700 }}>Amount</UserColumn>
            </UserRowWrapper>
            {
              users.map((user, index) => <UserRow key={ index } user={ user } index={ index } />)
            }
          </>
        ) : <PageSubtitle style={{ marginLeft: '0.5rem' }}>No users to show..</PageSubtitle>
      }
    </Wrapper>
  )
}


// Exports:
export default Users
