import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  

`;

const theme = {
  colors: {
    primary: "#0070f3",
    bg: "brown",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>e-Commerce</title>
        <link
          rel="icon"
          type="imagem/png"
          href="https://www.favicon.cc/logo3d/329774.png"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
