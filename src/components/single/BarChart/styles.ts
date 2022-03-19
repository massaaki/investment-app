import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    .bar {
      fill: ${theme.colors.blue200};
    }
    text {
      fill: ${theme.colors.white500};
      font-size: 16px;
    }
  `}
`
