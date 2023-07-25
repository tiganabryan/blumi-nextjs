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
        <Grid item container alignContent={'center'} direction={'column'}>
          <Grid item marginTop={8} marginBottom={2}>
            <Typography
              variant={'h4'}
              component={'h2'}
              color={'#227C9D'}
              fontWeight={'600'}
              align="center"
              id="services-section--js-scroll"
            >
              Our Work
            </Typography>
          </Grid>

          <Grid item container>
            <Card xs={12}>
              <Grid item container direction={'column'} xs={6}>
                <Typography>The Mob's Press</Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione dolorum sapiente modi atque! Perspiciatis culpa eum
                  veniam nam dignissimos sint quis fuga officiis vero rerum,
                  magni, necessitatibus placeat unde atque?
                </Typography>
                <Grid item container xs={2}>
                  <Grid item xs={2}>
                    <a href="google.ca">Learn more</a>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography>--</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}></Grid>
            </Card>
          </Grid>

          <Divider />
        </Grid>
      </Grid>
    </>
  );
};

export default OurWork;
