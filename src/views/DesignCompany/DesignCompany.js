import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import './hero.css';

import Main from 'layouts/Main';
import { Topbar } from 'layouts/Main/components';
import Container from 'components/Container';
import {
  Partners,
  CaseStudy1,
  CaseStudy2,
  CaseStudy3,
  Hero,
  Contact,
  OurWork,
  MeetYourTeam,
} from './components';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Form from '/Users/user/Desktop/blumi/blumi-nextjs/src/views/HireUs/components/Form/Form.js';

const DesignCompany = () => {
  const theme = useTheme();

  return (
    <>
      {/* <Main> */}
      {/* <Container> */}
      {/* <Topbar /> */}
      <Box className="hero-container">
        <Hero />
        <OurWork />
        <MeetYourTeam />
        <Container maxWidth={800} paddingBottom={'0 !important'}>
          <Grid
            item
            container
            alignContent={'center'}
            direction={'column'}
            marginBottom={4}
          >
            <Grid item marginTop={8} marginBottom={1}>
              <Typography
                variant={'h4'}
                component={'h2'}
                color={'#227C9D'}
                fontWeight={'600'}
                align="center"
                // id="services-section--js-scroll"
              >
                Got a project for us?
              </Typography>
            </Grid>

            <Typography
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
            </Typography>
          </Grid>
          <Form />
        </Container>
      </Box>
    </>
  );
};

export default DesignCompany;
