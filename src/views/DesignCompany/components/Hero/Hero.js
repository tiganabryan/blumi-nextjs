import React from 'react';
import { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import TestImg from './IMG_4299.png';
import YellowHeroVector from '/Users/user/Desktop/blumi/blumi-nextjs/src/img/Vector 1.svg';
import GreenHeroVector from '/Users/user/Desktop/blumi/blumi-nextjs/src/img/Vector 2.svg';
import PinkHeroVector from '/Users/user/Desktop/blumi/blumi-nextjs/src/img/Vector 3.svg';
// import HeroSVG from './HeroSVG.svg';
import HeroVector from './HeroVector';
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
      <Box
      // position="absolute" top="0px" bottom="0px" left="0px" right="0px"
      >
        {/* <Grid container> */}
        <Grid
          container
          direction={'column'}
          spacing={6}
          padding={{ xs: 4, md: 24 }}
          paddingTop={{ xs: 0, md: 12 }}
        >
          {/* <Grid item xs={12} md={6}> */}
          {/* <Box> */}
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

          {/* <br />
              <Typography variant="h4" color={'white'} xs={12} md={6}>
                Are you ready to unlock the true potential of your online
                presence? Let Blumi be your guide on this transformative
                journey. Together, we will create a digital masterpiece that
                elevates your brand, captivates your audience, and drives your
                business forward. Contact us now to embark on an unforgettable
                design adventure.
              </Typography> */}

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
          {/* </Box> */}
        </Grid>
        {/* </Grid> */}
      </Box>
    </>
  );
};

export default Hero;
