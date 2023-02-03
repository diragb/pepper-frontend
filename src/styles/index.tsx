// Packages:
import styled from 'styled-components'


// Exports:
export const PageTitle = styled.div`
  font-weight: 700;
  font-size: 3rem;
`

export const PageHeading = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
`

export const PageSubtitle = styled.div`
  font-weight: 500;
  font-size: 1rem;
`

export const Input = styled.input`
  margin: 0.25rem 0;
  padding: 0.5rem 1rem;
  color: #2E3532;
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  background-color: #ececec;
  border: none;
  border-radius: 0.25rem;
  outline: none;
`

export const Button = styled.div<{ isDisabled?: boolean }>`
  width: fit-content;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 500;
  border-radius: 0.25rem;
  background-color: ${ props => props.isDisabled ? 'grey' : '#FAA300' };
  user-select: none;
  cursor: pointer;
  transition: all 0.25s ease;
`
