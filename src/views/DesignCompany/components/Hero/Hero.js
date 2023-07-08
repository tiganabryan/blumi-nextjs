import React from 'react';
import { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Topbar } from 'layouts/Main/components';
import pages from '/Users/user/Desktop/blumi/blumi-nextjs/src/layouts/navigation.js';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import ServicePaper from './ServicePaper';
import ServiceCard from '../../../../blocks/cards/ServicesCard/ServicesCard';

const Hero = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <>
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        colorInvert={trigger ? false : colorInvert}
      />

      <Grid
        container
        direction={'column'}
        spacing={6}
        padding={{ xs: 4, md: 24 }}
        paddingTop={{ xs: 0, md: 12 }}
      >
        <Grid item>
          <Typography
            // variant="h1"
            component={'h1'}
            fontSize={{ xs: '3rem', md: '5rem' }}
            fontFamily={"'Livvic', sans-serif"}
            color="#227C9D"
            align="left"
            lineHeight={1.1}
          >
            LOREM LOREM LOREM LOREM
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="p" color={'white'}>
            We design, develop and launch websites and products for startups,
            small businesses and ourselves.
          </Typography>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="small"
            fullWidth={isMd ? false : true}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        direction={'column'}
        paddingX={{ xs: 6, md: 12 }}
        paddingY={{ xs: 2, md: 6 }}
      >
        <Grid item container alignContent={'center'} direction={'column'}>
          <Grid item>
            <Typography component={'h2'} align="center">
              Services
            </Typography>
          </Grid>

          <Grid item>
            <Typography component={'p'}>
              Unlike teams from larger agencies, we will treat your project as
              if it were our own.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          spacing={{ xs: 3 }}
          direction={`xs ? 'column' : 'row'`}
          justifyContent={'center'}
        >
          <Grid item xs={12} md={3}>
            <ServiceCard />
          </Grid>

          <Grid item xs={12} md={3}>
            <ServiceCard />
          </Grid>

          <Grid item xs={12} md={3}>
            <ServiceCard />
          </Grid>

          <Grid item xs={12} md={3}>
            <ServiceCard />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
