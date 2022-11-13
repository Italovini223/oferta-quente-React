import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 150px auto;
  grid-template-areas:
  "header"
  "content";
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
`;

export const Header = styled.header`
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  grid-area: header;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  
  
  > img {

    width: 60px;
    height: 60px;
  }

  > span {

  }
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;

  margin: 0 auto;

  grid-area: content;

  overflow-y: auto;

`;

export const ProductDetail = styled.div`
  margin: 50px auto 0;
  width: 100%;


  display: flex;
  gap: 10px;

  padding: 10px;
  

  background-color: ${({theme}) => theme.COLORS.WHITE};

  > .image {
     width: 50%;
    img {
      max-width: 100%;
      object-fit: cover;
    }
  }

  > .details {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    h2{
      font-weight: 700;
      font-size: 2.2rem;
    }

    strong{
      color: green;
      font-size: 2rem;
    }
  

    .user_information {
      display: flex;
      align-items: center;
      gap: 5px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      p {
        font-weight: 700;
      }
    }

    a {
      width: 100%;
      height: 50px;

      margin-top: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none
      ;
      background-color: green;
      color: white;

      border: none;
    }
  }


`;