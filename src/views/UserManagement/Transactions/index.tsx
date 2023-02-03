// Packages:
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../..'
import { fetchTransactions } from '../../../api'


// Typescript:
import { Transaction } from '../../../api'


// Styles:
import { PageSubtitle, PageTitle } from '../../../styles'

const Wrapper = styled.div`
  padding: 2rem;
`

const TransactionRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TransactionColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  font-weight: 500;
`


// Functions:
const TransactionRow = (props: { transaction: Transaction, index: number }) => {
  return (
    <TransactionRowWrapper style={{ backgroundColor: props.index % 2 === 0 ? '#f1a8af' : '#f1c7cb' }}>
      <TransactionColumn style={{ width: '20%' }}>{ props.transaction.from.toString() === '0' ? 'BANK' : props.transaction.from.toString() }</TransactionColumn>
      <TransactionColumn style={{ width: '20%' }}>{ props.transaction.to.toString() }</TransactionColumn>
      <TransactionColumn style={{ width: '60%' }}>{ props.transaction.amount }</TransactionColumn>
    </TransactionRowWrapper>
  );
}

const Transactions = () => {
  // State:
  const { auth } = useContext(AuthContext)
  const [ transactions, setTransactions ] = useState<Transaction[]>([])

  // Functions:
  const getTransactions = async () => {
    if (auth.accountNumber === null) return
    const fetchedTransactions = await fetchTransactions(auth.accountNumber)
    setTransactions(fetchedTransactions)
  }

  // Effects:
  useEffect(() => {
    getTransactions()
  }, [])

  // Return:
  return (
    <Wrapper>
      <PageTitle>Transactions</PageTitle>
      {
        transactions.length > 0 ? (
          <>
            <TransactionRowWrapper style={{ marginTop: '2rem', backgroundColor: '#DB5461', color: 'white' }}>
              <TransactionColumn style={{ width: '20%', fontWeight: 700 }}>From</TransactionColumn>
              <TransactionColumn style={{ width: '20%', fontWeight: 700 }}>To</TransactionColumn>
              <TransactionColumn style={{ width: '60%', fontWeight: 700 }}>Amount</TransactionColumn>
            </TransactionRowWrapper>
            {
              transactions.map((transaction, index) => <TransactionRow key={ index } transaction={ transaction } index={ index } />)
            }
          </>
        ) : <PageSubtitle style={{ marginLeft: '0.5rem' }}>No transactions to show..</PageSubtitle>
      }
    </Wrapper>
  )
}


// Exports:
export default Transactions
