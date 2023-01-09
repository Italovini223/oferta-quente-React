import styled from "styled-components";

export const Container = styled.button`
  width: 20px;
  height: 100px;

  border: none;
  background-color: transparent;


`;

export const Content = styled.div`
  width: 100%;

  display: flex; 
  flex-direction: column;
  gap: 10px;
  align-items: center;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;



