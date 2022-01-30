import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    width: 100%;

    @media (min-width: 720px) {
      background: ${theme.colors.blackOpac500};
      padding: 1rem 2rem;
      border-radius: 5rem;
      margin: 0 1rem;
    }
  `}
`

export const NavGroup = styled.div`
  ${({ theme }) => css`
    @media (min-width: 760px) {
      display: none;
      pointer-events: none;
    }
    > li {
      cursor: pointer;
      svg {
        width: 2.5rem;
        height: 2.5rem;
        color: ${theme.colors.white500};
      }
    }
  `}
`

const navSubGroupModiffer = {
  show: () => css`
    opacity: 0;
    animation: showNav 0.5s forwards;
    @keyframes showNav {
      0% {
        display: block;
        opacity: 0;
        transform: translate3D(0, 0, 0);
      }
      100% {
        display: block;
        opacity: 1;
        transform: translate3D(-70%, 0, 0);
      }
    }
  `,

  hidden: () => css`
    animation: hideNav 0.5s forwards;
    display: none;
    pointer-events: none;
    @keyframes hideNav {
      0% {
        display: block;
        opacity: 1;
        transform: translate3D(-30%, 0, 0);
      }
      80% {
        display: block;
        opacity: 1;
        transform: translate3D(30%, 0, 0);
      }
      100% {
        display: block;
        opacity: 0;
      }
    }
  `
}

export const CloseButton = styled.li`
  ${({ theme }) => css`
    width: 70%;
    position: relative;
    button {
      top: 2.5rem;
      right: 0;
      position: absolute;
      cursor: pointer;
      border: 0;
      background: transparent;
      svg {
        width: 2rem;
        height: 2rem;
        path {
          stroke: ${theme.colors.black};
        }
      }
    }
  `}
`

type NavSubGroupProps = {
  show: boolean
}

export const NavSubGroup = styled.ul<NavSubGroupProps>`
  ${({ theme, show }) => css`
    opacity: 0;
    position: absolute;
    width: 100%;
    background: ${theme.colors.white500};
    top: 0;
    height: 100vh;
    > li {
      height: 4.2rem;
      font-size: 2rem;
      margin-top: 1rem;
      color: ${theme.colors.black};
      font-weight: ${theme.font.weights.light};
    }
    ${show ? navSubGroupModiffer.show() : navSubGroupModiffer.hidden()}
  `}
`

export const NavSideBySide = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`

type NavGroupBackgroundProps = {
  show: boolean
}

const navGroupBackgroundModiffier = {
  show: () => css`
    animation: showNavBackground 0.3s forwards;
    @keyframes showNavBackground {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,

  hidden: () => css`
    animation: hiddenNavBackground 0.3s forwards;
    pointer-events: none;
    display: none;
    @keyframes hiddenNavBackground {
      0% {
        display: block;
        opacity: 1;
      }
      100% {
        display: block;
        opacity: 0;
      }
    }
  `
}

export const NavGroupBackground = styled.div<NavGroupBackgroundProps>`
  ${({ show }) => css`
    ${show
      ? navGroupBackgroundModiffier.show()
      : navGroupBackgroundModiffier.hidden()}

    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
  `}
`
