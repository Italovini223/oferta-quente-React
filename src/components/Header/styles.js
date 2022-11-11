import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0;


  grid-area: header;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Top = styled.div`
  display: flex;

  justify-content: space-around;
  width: 50%;
  gap: 20px;

  margin: 5px;


  > img {
    width: 50px;
    height: 50px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 5rem;

  margin-top: 10px;

  width: 50%;

  list-style: none;

`;