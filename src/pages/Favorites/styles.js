import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};


  display: grid;
  grid-template-rows: 100px auto;
  grid-template-areas:
  "header"
  "content";

  
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;

  padding-left: 30px;

  display: flex;
  align-items: center;
  justify-content: left;
  
  grid-area: header;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  
  > button {
    display: flex;
    gap: 5px;

    border: none;
    background-color: transparent;

    font-size: 20px;
    color: ${({theme}) => theme.COLORS.RED};
  }

  @media(max-width: 1000px){
    width: 100%;
    padding: 5px;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  height: 100%;

  grid-area: content;

  margin: 5px auto;

  padding: 0 10px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

`;

export const Products = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr; 

  @media(max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;