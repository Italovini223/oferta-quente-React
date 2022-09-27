import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;

  grid-area: header;
`;

export const Top = styled.div`
  display: flex;

  justify-content: space-around;
  width: 50%;
  gap: 20px;
`;