import styled from 'styled-components'

export const Container = styled.div`
  max-width: 500px;
  min-height: 250px;

  margin: 8px;
  padding: 10px 10px 0;

  display: flex;
  flex-direction: column;

  background-color: ${({theme})=> theme.COLORS.WHITE};
`;

export const Description = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  min-width: 100px;
  padding: 0 20px;
  margin-bottom: 40px;

  font-size: clamp(16px, 18px, 20px);
  font-weight: 700;

  > img {
    object-fit: cover;
    height: 100px;
  }
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 10px;

  > span {
    color: green;
    font-weight: 700;
    font-size: clamp(20px, 22px, 24px);
  }

  > img {
    width: 60px;

  }
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid red;
  background-color: red;
`;

export const Utils = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
 

  > a {
    text-decoration: none;
    color: black;
    font-weight: 500;
  } 
`;

export const UserInfo= styled.div`
 

  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;