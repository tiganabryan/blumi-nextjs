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
import SvgIcon from '@mui/material/SvgIcon';
import NoSsr from '@mui/material/NoSsr';

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

  const mouseIconSVG = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
      />
    </svg>
  `;

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
        marginBottom={{ xs: 0, md: 12 }}
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
          <Grid item container justifyContent={'center'}>
            {/* <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </SvgIcon> */}
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('services-section--js-scroll')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Grid>

          <Grid item marginTop={13}>
            <Typography
              variant={'h4'}
              component={'h2'}
              color={'#227C9D'}
              fontWeight={'600'}
              align="center"
              id="services-section--js-scroll"
            >
              Services
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant={'h6'}
              component={'p'}
              fontWeight={500}
              color={'#646E73'}
              align="center"
            >
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
            <ServiceCard
              iconSVG={mouseIconSVG}
              iconColour={'#ffc857'}
              title="Idea"
              description="We meet with your team to know more about your idea, project and goal. After that, our team sits to create an action plan and proposal for your project."
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <ServiceCard
              iconSVG={mouseIconSVG}
              title="Design"
              description="We meet with your team to know more about your idea, project and goal. After that, our team sits to create an action plan and proposal for your project."
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <ServiceCard
              iconSVG={mouseIconSVG}
              title="Development"
              description="We meet with your team to know more about your idea, project and goal. After that, our team sits to create an action plan and proposal for your project."
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <ServiceCard
              iconSVG={mouseIconSVG}
              title="Launch & Maintenance"
              description="We meet with your team to know more about your idea, project and goal. After that, our team sits to create an action plan and proposal for your project."
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
