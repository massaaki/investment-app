import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef
} from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
} & ButtonTypes

export const Button = forwardRef<S.WrapperProps, ButtonProps>(
  ({ children, size = 'medium', fullWidth = false, icon, ...props }, ref) => {
    return (
      <>
        <S.Wrapper
          ref={ref}
          size={size}
          hasIcon={!!icon}
          fullWidth={fullWidth}
          {...props}
        >
          {!!icon && icon}
          {!!children && <span>{children}</span>}
        </S.Wrapper>
      </>
    )
  }
)
Button.displayName = 'Button'
