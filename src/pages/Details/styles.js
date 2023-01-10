import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-rows: 50px auto auto auto;
  grid-template-areas:
  "header"
  "content"
  "comments"
  "addComment";
  
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Header = styled.header`
  width: 50%;
  height: 50px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: left;
  
  grid-area: header;

  background-color: ${({theme}) => theme.COLORS.WHITE};
  
  > button {
    display: flex;
    gap: 5px;

    border: none;
    background-color: transparent;

    font-size: 20px;
    color: ${({theme}) => theme.COLORS.RED};
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;

  margin: 0 auto;

  grid-area: content;

  > .commentsAmount{
    width: 100%;

    display: flex;
    align-items: center;
    gap: 5px;

    margin-bottom: 10px;

    font-size: 20px;
    color: ${({theme}) => theme.COLORS.RED};
  }

`;

export const ProductDetail = styled.div`
  margin: 50px auto 20px;
  width: 100%;



  display: flex;
  gap: 10px;

  padding: 10px;
  border-bottom: 1px solid red;
  

  background-color: ${({theme}) => theme.COLORS.WHITE};

  @media(max-width: 1024px){
    flex-direction: column;
    align-items: center;

    .image{
      width: 100%;
    }
  }

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

    margin: 20px 0;

    display: flex;
    flex-direction: column;
    gap: 40px;

    h2{
      font-weight: 700;
      font-size: clamp(1.9rem 2rem 2.2rem);
    }

    strong{
      color: green;
      font-size: 2.5rem;
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

export const Comments = styled.div`
  width: 50%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  grid-area: comments;


`;

export const AddComment = styled.div`
  width: 50%;
  margin: 10px auto 20px;

  display: flex;
  align-items: center;
  gap: 10px;

  grid-area: addComment;


  > button {

    
    border: none;
    background-color: transparent;

    font-size: 30px;

    color: ${({theme}) => theme.COLORS.RED};

    cursor: pointer;
  }
`;