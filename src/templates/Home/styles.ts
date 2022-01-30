import styled, { css } from 'styled-components'

export const Container = styled.div`
  background-image: url('images/home-header-bg.png');
  height: 100vh;
  width: 100%;
`
export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  height: 100%;
  display: flex;
  align-items: center;
`

export const Hero = styled.div`
  ${({ theme }) => css`
    h1 {
      color: ${theme.colors.white500};
      font-weight: ${theme.font.weights.black};
      font-size: 6rem;
      max-width: 720px;
    }
    div {
      margin-top: 2rem;
      a {
        background: ${theme.colors.blueGrandient500};
        color: ${theme.colors.white500};
        font-weight: ${theme.font.weights.bold};
        font-size: 1.8rem;
        padding: 1.5rem 4rem;
        border-radius: 4rem;
      }
    }
  `}
`
