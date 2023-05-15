import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 0;
`

// buttons 
export const PrimaryButton = styled.button`
  font-size: 105%;
  padding: 7px 12px;
  background-color: #347ab7;
  color: white;
  border: none;
  border-radius: 5px;

  :disabled {
    background-color: silver;
  }
`

// headers
export const H1 = styled.h1`
  font-size: 1.5rem;
  padding-bottom: 2rem;
`

// elements
export const Ul = styled.ul`
  margin-bottom: 2rem;
`

export const P = styled.p`
  padding: 1rem 0;
  font-size: 1.2rem;
`