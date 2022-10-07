import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({previous}) => previous ? 'black' : 'red'};
  color: white;

  border: none;
  border-radius: 50px;

  margin: 20px 0;
`;