import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  
  display: flex;
  align-items: center;
  gap: 8px;

  border: ${({SingIn, readOnly}) => readOnly ? '1px solid gray' :  SingIn ? '1px solid white' : '1px solid red'  } ;
  border-radius: 10px;

  padding: 0 10px;



  > input {
    width: 100%;
    height: 35px;

    border: none;
    background-color: transparent;

    color: ${({SingIn, readOnly}) => readOnly ? 'grey' : SingIn ? 'white' : 'red'};

    &::placeholder {
      color: ${({SingIn}) => SingIn ? 'white' : 'red'};
    }

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0; 
    }

  }

  > svg {
    color: ${({SingIn ,readOnly}) => readOnly ? 'grey' : SingIn ? 'white' : 'red'};
    font-size: 24px;
    background-color: transparent;
  }
`;
