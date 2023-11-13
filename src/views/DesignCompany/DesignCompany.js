import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import './hero.css';

import Main from 'layouts/Main';
import { Topbar } from 'layouts/Main/components';
import Container from 'components/Container';
import { Hero, Contact, OurWork, MeetYourTeam, Services } from './components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Form from '/Users/user/Desktop/blumi/blumi-nextjs/src/views/HireUs/components/Form/Form.js';
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
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
            textTransform: 'lowercase',
            fontFamily: 'Lato',
            width: '9rem',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
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
                // id="services-section--js-scroll"
              >
                Let's talk about your vision
              </Typography>
            </Grid>

            {/* <Typography
              variant={'body1'}
              fontSize={'1.2rem'}
              component={'h2'}
              color={'#646E73'}
              // fontWeight={'600'}
              align="center"
              // id="services-section--js-scroll"
            >
              We help brands and platforms turn big ideas into beautiful digital
              products and experiences.
            </Typography> */}
          </Grid>
          <Form />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default DesignCompany;
