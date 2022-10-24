import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
 

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  
  display: grid;
  grid-template-rows: 150px auto;
  grid-template-areas:
  "header"
  "content";


`;


export const Content = styled.div`
  max-width: 100%;
  height: 100%;
  grid-area: content;
  margin: 5px auto;

  padding: 0 10px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

 

  overflow-y: auto;

  @media(max-width: 1024px) {
    max-width: 100%;
    margin: 0;
  }


  &::-webkit-scrollbar {
    background: none;              /* width of the entire scrollbar */
  }  
  
  &::-webkit-scrollbar-thumb {
    background-color: white;    
    border-radius: 20px; 
      
  }

`;


export const Banner = styled.div`
  width: 100%;  
  height: 340px;

  margin: 20px auto;

  background-color: black;

  
  > img {
    width: 100%;
    height: 100%;
  }

  @media(max-width: 768px) {
    display: none;
  }

  
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

