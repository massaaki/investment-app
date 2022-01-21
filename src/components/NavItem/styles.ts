import styled, { css } from "styled-components";


export const Content = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white500};
    font-weight: ${theme.font.weights.bold};
    margin-left: 1.5rem;
  `}
`;