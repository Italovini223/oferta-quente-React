import styled from 'styled-components'

export const Container = styled.div`
  max-width: 500px;
  min-height: 280px;

  margin: 8px;
  padding: 10px 10px 0;

  display: flex;
  flex-direction: column;

  background-color: ${({theme})=> theme.COLORS.WHITE};
  border: none;

  @media(max-width: 375px){
    max-width: 320px;
  }

  @media(max-width: 425px){
    max-width: 400px;
  }

  @media(max-width: 768px){
    max-width: 350px;
  }
`;

export const Description = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;

  min-width: 100px;
  padding: 0 20px;
  margin-bottom: 40px;

  font-size: clamp(16px, 18px, 20px);
  font-weight: 700;

  border: none;
  background-color: transparent;
  cursor: pointer;

  > img {
    object-fit: cover;
    height: 100px;
    max-width: 200px;
  }

  p {
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;

    color: black;
  }


`;

export const Information = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 10px;

  > span {
    color: green;
    font-weight: 700;
    font-size: clamp(20px, 22px, 24px);
  }

  > img {
    width: 60px;
    max-height: 40px;
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

  padding: 0 8px;
 

 
`;

export const Actions = styled.div`


  display: flex;
  align-items: center;
  gap: 10px;
  

  button {
    border: none;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
    color: grey;
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