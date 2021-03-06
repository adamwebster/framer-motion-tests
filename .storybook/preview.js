import React from "react"
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { AppContextProvider } from '../src/AppState'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const GlobalStyle = createGlobalStyle`
  body {
    font: 13px/1.5 'Helvetica Neue', Arial, 'Liberation Sans', FreeSans, sans-serif;
  }
  `

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{}}>
      <AppContextProvider>
      <GlobalStyle />
      <Story />
      </AppContextProvider>
    </ThemeProvider>
  ),
];