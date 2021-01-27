import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import FoundationTokens from '../foundation-tokens.json'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const { theme } = FoundationTokens

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{FoundationTokens.title} - {FoundationTokens.titleSecondary}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App