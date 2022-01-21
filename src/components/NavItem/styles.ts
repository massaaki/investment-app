import styled, { css, DefaultTheme } from "styled-components";

type ContentProps = {
  filled: boolean;
}


const ContentModifiers = (theme: DefaultTheme) => (
  css`
    background: ${theme.colors.lightBlue500};
    color: ${theme.colors.white500};
    padding: 1rem 2rem;
    border-radius: 4rem;
  `
)

export const Content = styled.li<ContentProps>`
  ${({ theme, filled }) => css`
    color: ${theme.colors.white500};
    font-weight: ${theme.font.weights.bold};
    margin-left: 1.5rem;

    ${filled && ContentModifiers(theme)};

    
  `}
`;