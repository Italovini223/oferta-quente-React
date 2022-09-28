import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid red;

  padding: 0 30px;

  grid-area: header;
`;

export const Top = styled.div`
  display: flex;

  justify-content: space-around;
  width: 50%;
  gap: 20px;

  margin: 10px;

  > img {
    width: 50px;
    height: 50px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  gap: 2rem;
  width: 100%;

  list-style: none;
`;