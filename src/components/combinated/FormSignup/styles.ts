import styled, { css } from 'styled-components'

import * as TextFieldStyles from 'components/single/TextField/styles'
import * as ButtonStyles from 'components/single/Button/styles'

export const Wrapper = styled.div`
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
