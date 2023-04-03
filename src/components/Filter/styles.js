import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;

  align-items: center;

  font-weight: 700;

  border: none;
  background: none;

  color: ${({ clicked, theme }) => clicked ? theme.COLORS.RED : theme.COLORS.BLACK };

  > span {
    background-color: transparent;
  }

  > svg {
    background: transparent;
    font-size: 24px;
  }
`;