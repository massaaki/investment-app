import styled, { css } from 'styled-components';


export const Container = styled.ul`
  display: flex;
  width: 100%;
  padding: 1.5rem 1rem;
  margin-left: 1rem;
  border-radius: 5rem;

  ${({ theme }) => css`
    background: ${theme.colors.blackOpac500};
  `}
`