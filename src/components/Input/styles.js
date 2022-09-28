import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  border: 1px solid red;
  border-radius: 10px;

  padding: 0 10px;



  > input {
    width: 100%;
    height: 50px;

    border: none;
    background-color: transparent;

    color: red;

    &::placeholder {
      color: red;
    }

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0; 
    }
  }

  > svg {
    color: red;
    font-size: 24px;
    background-color: transparent;
  }
`;
