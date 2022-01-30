import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    background: ${theme.colors.gray800};
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

export const FormControl = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white500};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    border-radius: 0.5rem;
    width: 100%;
    max-width: 35rem;
  `}
`
