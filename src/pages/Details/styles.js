import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 150px auto;
  grid-template-areas:
  "header"
  "content";
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
`;

export const Header = styled.header`
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  grid-area: header;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  
  
  > img {

    width: 60px;
    height: 60px;
  }

  > span {

  }
`;