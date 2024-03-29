import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;


  padding: 20px 0;


  grid-area: header;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  position: relative;

`;


export const SidebarContent = styled.div`
  width: 50px;
  margin-right: 10px;

  display: flex;

  justify-content: center;


  position: absolute;
  right: 0;
  top: 2;

  > svg {
    font-size: 22px;
  }


`;

export const Content = styled.div`
  width: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Top = styled.div`
  display: flex;
  align-items: center;


  justify-content: space-around;
  width: 50%;
  gap: 20px;
  margin: 5px;


  > img {
    width: 60px;
    height: 60px;
  }

  @media(max-width: 700px){
    img {
      width: 40px;
      height: 40px;
    }

    width: 70%;
  
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

  @media(max-width: 700px){
    gap: 1rem;
  }

`;