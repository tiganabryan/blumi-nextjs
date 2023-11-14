import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// import { theme } from '../utils/theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Page from '../components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import '../views/DesignCompany/hero.css';
// /Users/user/Desktop/blumi/blumi-nextjs/src/views/DesignCompany/hero.css

const theme = createTheme({
  // palette: mode === 'light' ? light : dark,
  primary: {
    main: '#227C9D',
  },
  secondary: {
    main: '#8D3B72',
  },
  text: {
    secondary: '#000000',
    primary: '227C9D',
  },
  // shadows: shadows(mode),
  typography: {
    fontFamily: "'Lato', sans-serif",
    h1: {
      fontFamily: "'Livvic', sans-serif",
    },
    button: {
      textTransform: 'none',
      fontWeight: 'medium',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>theFront | UI Kit by Maccarian Agency.</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Livvic&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
