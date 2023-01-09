import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  
`;

export const UserDetails = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  align-items: center;
  justify-content: center;

 > img {
  width: 200px;
  height: 200px;

  border-radius: 50%;
 }

 > span {
    font-size: 24px;
 }

`;

export const Functionalities = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;