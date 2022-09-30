import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  
  display: grid;
  grid-template-rows: 150px 450px auto;
  grid-template-areas:
  "header"
  "banner"
  "content";


`;

export const Content = styled.div`
  width: 100%;
  grid-area: content;
  margin-top: 5px;

  

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  @media(max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;


export const Banner = styled.div`
  width: 70%;
  height: 350px;

  margin: 0 auto;

  background-color: black;

  grid-area: banner;
  
  > img {
    width: 100%;
    height: 100%;
  }
`;
