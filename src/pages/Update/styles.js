import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: ${({theme}) => theme.COLORS.BLUE_900};
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


export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;

  padding: 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Avatar = styled.div`
  position: relative;

  margin-bottom: 20px;


  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.RED};
  }

  > label{
    width: 48px;
    height: 48px;

    background-color: ${({theme}) => theme.COLORS.RED};

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

`;