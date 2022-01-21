import styled, { css } from 'styled-components';


export const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 1.5rem 2rem;
  margin: 0 1rem;
  border-radius: 5rem;

  ${({ theme }) => css`
    background: ${theme.colors.blackOpac500};
  `}
`