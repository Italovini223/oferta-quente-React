import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.COLORS.BLUE_900};
`;

export const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(max-width: 768px){
    width: 100%;
    padding: 20px;
  }
  
`;

export const Header = styled.header`
  width: 50%;
  height: 50px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: left;
  
  grid-area: header;


  @media(max-width: 1000px){
    width: 100%;
    padding: 20px;
  }
`;

export const UserDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: center;
  justify-content: center;

 > img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.COLORS.RED};
 }

 > span {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
    text-align: center;
 }

`;

export const Functionalities = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;