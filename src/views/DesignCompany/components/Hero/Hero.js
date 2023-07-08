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
    </>
  );
};

export default Hero;
