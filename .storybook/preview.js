import { GlobalStyles } from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white500
      },
      {
        name: 'dark',
        value: theme.colors.black
      }
    ]
  }

}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
    </ThemeProvider>
  )
]
