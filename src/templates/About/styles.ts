import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${() => css`
    height: 100vh;
    width: 100%;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 1280px;
    margin: 0 auto;
    padding: 12rem 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: ${theme.colors.white500};
      margin-bottom: ${theme.spacings.small};
    }
  `}
`
