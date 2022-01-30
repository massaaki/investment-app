import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, hasIcon, fullWidth, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 0.5rem;
    font-weight: ${theme.font.weights.extraBold};
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.blueGrandient500};
    color: ${theme.colors.white500};

    ${!!size && wrapperModifiers[size](theme)}
    ${hasIcon && wrapperModifiers.withIcons(theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`

// Modifiers
const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
  withIcons: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}
