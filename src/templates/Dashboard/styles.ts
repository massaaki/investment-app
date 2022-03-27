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

export const Info = styled.ul`
  ${({ theme }) => css`
    width: 250px;
    li {
      color: ${theme.colors.white500};
      margin: ${theme.spacings.xxsmall};
      background: rgba(255, 255, 255, 0.06);
      padding: ${theme.spacings.small};
      width: 100%;
      border-radius: 7px;

      h2 {
        font-size: ${theme.font.sizes.small};
      }
      > div {
        font-size: ${theme.font.sizes.xxlarge};
        font-weight: 900;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    @media (max-width: 720px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `}
`
