import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';

import Container from 'components/Container';
import { Hero, Contact, OurWork, MeetYourTeam, Services } from './components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Form from '../HireUs/components/Form/Form.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const DesignCompany = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#227C9D',
      },
      secondary: {
        main: '#E0C2FF',
        light: '#F5EBFF',
        contrastText: '#47008F',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'lowercase',
            fontFamily: 'Lato',
            // width: '10rem',
            // fontSize: { lg: '1.2rem' },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <Box position={'relative'} overflow={'hidden'}> */}
      <Main>
        <Hero />
        <Services />
        <MeetYourTeam />
        <Container maxWidth={800}>
          <Grid
            item
            container
            alignContent={'center'}
            direction={'column'}
            marginBottom={4}
          >
            <Grid item marginBottom={1}>
              <Typography
                variant={'h4'}
                component={'h2'}
                color={'#227C9D'}
                fontWeight={'600'}
                align="center"
                fontFamily={'Lato'}
                id="contact-us-section--js-scroll"
              >
                Let's talk about your vision
              </Typography>
            </Grid>
          </Grid>
          <Form />
        </Container>
      </Main>
      {/* </Box> */}
    </ThemeProvider>
  );
};

export default DesignCompany;
