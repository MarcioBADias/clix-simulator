import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 60.7px);
  grid-template-rows: repeat(16, 60.7px);
  gap: 1px;
  background-color: #1e3a8a;
  padding: 5px;
  margin-top: 1rem;
`

export const Cell = styled.div`
  width: 60.7px;
  height: 60.7px;
  background-color: #065f4690;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
`
