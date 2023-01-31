import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  background: ${({theme}) => theme.COLORS.WHITE}; 
  color: ${({theme}) => theme.COLORS.RED};
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  border: none;
  > svg {
    margin: 0 20px; 
  }
  &:hover {
    background-color: ${({theme}) => theme.COLORS.GREY_500};
  }
`;