import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #001C32;
`
export const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  
  @media(min-width: 768px){
    width: 500px;
  }

`;

export const StorageInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  > img {
    width: 200px;
  }

  > h1,h2 {
    color: white ;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

 > a {
  text-decoration: none;
  color: white;
  font-size: 20px;
 }
`;