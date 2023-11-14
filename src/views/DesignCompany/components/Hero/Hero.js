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
import NoSsr from '@mui/material/NoSsr';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import HeroImage from './HeroImage.jsx';

// create longer hero img for less than 350 width
const Hero = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();

  // let heroImg = '';

  // const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
  //   defaultMatches: true,
  // });
  // const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
  //   defaultMatches: true,
  // });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  // const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
  //   defaultMatches: true,
  // });
  // const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
  //   defaultMatches: true,
  // });

  const deviceWidthSmallerThanMedium = useMediaQuery('(max-width: 899px)');

  // const heroImages = {
  //   extraSmall: 'img/xsHeroImg.svg',
  //   small: 'img/smHeroImgSHORTER.svg',
  //   medium: 'img/mdHeroImg.svg',
  //   large: 'img/lgHeroImg.svg',
  //   extraLarge: 'img/xlHeroImg.svg',
  // };

  // if (isXs) {
  //   heroImg = heroImages.extraSmall;
  // } else if (isSm) {
  //   heroImg = heroImages.small;
  // } else if (isMd) {
  //   heroImg = heroImages.medium;
  // } else if (isLg) {
  //   heroImg = heroImages.large;
  // } else if (isXl) {
  //   heroImg = heroImages.extraLarge;
  // }

  return (
    <>
      <HeroImage />
      {/* <img src={heroImg} width="100%" className="hero" /> */}
      <Grid
        container
        direction={'column'}
        alignItems={deviceWidthSmallerThanMedium ? 'center' : 'left'}
        spacing={3}
        padding={{ xs: 4 }}
        paddingTop={{ xs: 0, md: 7 }}
        marginBottom={{ xs: 0, md: 12 }}
        // marginLeft={{ xs: 0, md: 1 }}
        position={'absolute'}
        top={0}
        left={0}
      >
        <Grid item marginTop={{ xs: 5.5, md: 0 }}>
          <Typography
            // variant="h1"
            component={'h1'}
            fontSize={{ xs: '2.4rem', sm: '4rem', md: '5.8rem', lg: '6.2rem' }}
            fontFamily={"'Livvic', sans-serif"}
            color="#227C9D"
            textAlign={isMd ? 'left' : 'center'}
            // textAlign={'left'}
            lineHeight={1.1}
          >
            welcome to blumi
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} marginBottom={{ xs: 1, md: 2 }}>
          <Typography
            variant="h4"
            component="p"
            color={'white'}
            fontSize={{ xs: '1.4rem', sm: '2rem', md: '2.3rem', lg: '2.8rem' }}
            textAlign={deviceWidthSmallerThanMedium ? 'center' : 'left'}
          >
            we build websites and software for midsize companies by hand.
          </Typography>
        </Grid>

        <Grid
          item
          container
          direction={deviceWidthSmallerThanMedium ? 'column' : 'row'}
          spacing={1}
          alignContent={deviceWidthSmallerThanMedium ? 'center' : 'left'}
          // marginTop={3}
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={true}
              // fullWidth={isMd ? false : true}
              sx={{
                fontSize: { md: '1.1rem' },
              }}
            >
              connect
            </Button>
            {/* <DarkBlueBtn text={'.'} /> */}
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                fontSize: { md: '1.1rem' },
              }}
            >
              view services
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
