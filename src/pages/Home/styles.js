import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 150px auto;
  grid-template-areas:
  "header"
  "content";


`;

export const Content = styled.div`
  width: 100%;
  grid-area: content;

  overflow-y: auto;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
`;
