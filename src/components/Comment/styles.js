import styled from "styled-components";

export const Container = styled.div`
  width: 100%; 
  height: 100px;

  margin: 0 auto;

  border-bottom: 1px solid red;

  display: flex;
  align-items: center;

  padding: 0 30px;

  background-color: #fff ;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  > p {
    margin-left: 20px;
  }
`;