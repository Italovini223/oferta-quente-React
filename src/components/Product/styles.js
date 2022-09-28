import styled from 'styled-components'

export const Container = styled.div`
  max-width: 900px;
  min-height: 250px;

  margin: 3px;
  padding: 20px 10px;

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

  font-size: clamp(12px, 13px, 15px);
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
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid red;
`;

export const Utils = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;