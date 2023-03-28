import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;

    border: none;
    background-color: transparent;

    font-size: 20px;
    color: ${({theme, isWithe}) => isWithe ? theme.COLORS.WHITE : theme.COLORS.RED};
`;  