import styled, { css } from 'styled-components'

import * as TextFieldStyles from 'components/single/TextField/styles'
import * as ButtonStyles from 'components/single/Button/styles'

export const Wrapper = styled.div`
  min-height: 20rem;
  // Single components position
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.small} auto ${theme.spacings.xsmall};
    }
  `}
`

export const WrapperLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20rem;
`
export const Loading = styled.img`
  width: 4rem;
`
