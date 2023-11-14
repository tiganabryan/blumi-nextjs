'use client';
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
import Image from 'next/image';

const OurWork = ({
  children,
  colorInvert = false,
  bgcolor = 'transparent',
}) => {
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

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
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
      <Grid
        container
        direction={'column'}
        paddingX={{ xs: 6, md: 12 }}
        paddingY={{ xs: 2, md: 6 }}
      >
        <Grid
          item
          container
          alignContent={'center'}
          direction={'column'}
          justifyContent={'center'}
        >
          <Grid item marginTop={8} marginBottom={2}>
            <Typography
              variant={'h4'}
              component={'h2'}
              color={'#227C9D'}
              fontWeight={'600'}
              align="center"
              id="services-section--js-scroll"
              marginBottom={3}
            >
              Our Work
            </Typography>
          </Grid>

          <Grid item marginBottom={3}>
            <img
              height={'100%'}
              width={'100%'}
              src="/img/pinnacleLogisticsWebsite.png"
              alt="..."
            />
          </Grid>

          <Grid item>
            <img
              height={'100%'}
              width={'100%'}
              src="/img/kbkunleWebsite.png"
              alt="..."
            />
          </Grid>

          <Divider />
        </Grid>
      </Grid>
    </>
  );
};

export default OurWork;
