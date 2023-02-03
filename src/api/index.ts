// Packages:
import axios from 'axios'


// Constants:
const ENDPOINT = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://pepper-bank-salt.herokuapp.com'


// Exports:
export interface Transaction {
  from: bigint
  to: bigint
  amount: number
}

export interface Result {
  status: boolean
  payload: any
}

export enum USER_TYPE {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export const fetchUser = async (accountNumber: bigint) => {
  const response = await axios.get(`${ ENDPOINT }/fetchUser?accountNumber=${ accountNumber }`)
  return response.data.data.user
}

export const fetchTransactions = async (accountNumber: bigint): Promise<Transaction[]> => {
  const response = await axios.get(`${ ENDPOINT }/fetchTransactions?accountNumber=${ accountNumber }`)
  return response.data.data.transactions
}

export const transferFunds = async (from: bigint, to: bigint, amount: number): Promise<Result> => {
  const user = await fetchUser(from)
  if (user.currentAccountBalance < amount) return {
    status: false,
    payload: 'Insufficient balance!'
  }
  else {
    await axios.post(`${ ENDPOINT }/transferFunds?`, {
      from: from.toString(),
      to: to.toString(),
      amount
    })
    return {
      status: true,
      payload: null
    }
  }
}

export const validateAccountNumber = (accountNumber: string) => {
  if (accountNumber.length < 16) return { status: false, payload: `Account number should be minimum 16 digits, recieved only ${ accountNumber.length }.` }
  if (!RegExp(/^[0-9]*$/).test(accountNumber)) return { status: false, payload: `Account number contains non-numeric characters.` }
  return {
    status: true,
    payload: BigInt(accountNumber)
  }
}

export const login = async (accountNumber: bigint, password: string) => {
  const user = await fetchUser(accountNumber)
  console.log(user)
  if (user === undefined) return {
    status: false,
    payload: 'User does not exist' as any
  }
  else {
    return {
      status: true,
      payload: user
    }
  }
}

export const fetchUsers = async () => {
  const response = await axios.get(`${ ENDPOINT }/fetchAllUsers`)
  return response.data.data.users
}

export const fetchBankDetails = async () => {
  const users = await fetchUsers() as any[]
  return {
    totalAmount: users.reduce((acc, c) => acc + c.amount, 0),
    users: users.length
  }
}


export const depositFunds = async (accountNumber: bigint, amount: number) => {
  await axios.post(`${ ENDPOINT }/deposit?`, {
    accountNumber: accountNumber.toString(),
    amount
  })
  return true
}

export const withdrawFunds = async (accountNumber: bigint, amount: number) => {
  await axios.post(`${ ENDPOINT }/withdraw?`, {
    accountNumber: accountNumber.toString(),
    amount
  })
  return true
}
