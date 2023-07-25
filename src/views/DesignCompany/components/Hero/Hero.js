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
            THE ART OF WEB DESIGN
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="p" color={'white'}>
            We develop websites for small business owners and ourselves, by
            hand.
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
            <Box marginTop={8}>
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

          <Grid item marginTop={8} marginBottom={2}>
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

          <Grid item marginBottom={6}>
            <Typography
              variant={'h6'}
              component={'p'}
              fontWeight={500}
              color={'#646E73'}
              align="center"
            >
              Unlike larger agencies, we will treat your project as if it were
              our own.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          spacing={{ xs: 3 }}
          direction={`xs ? 'column' : 'row'`}
          justifyContent={'center'}
          marginBottom={{ xs: 6, md: 12 }}
        >
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                p: 3,
              }}
            >
              <Grid container direction={'column'} spacing={3}>
                <Grid item>
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.9252 35.0221H31.937M42.0463 24.2407C38.3329 24.4415 34.693 23.1341 31.9252 20.6055C29.1574 23.1341 25.5175 24.4415 21.8041 24.2407C21.5053 25.4187 21.3545 26.6306 21.3555 27.8473C21.3555 34.533 25.8464 40.1521 31.9252 41.7449C38.004 40.1521 42.4949 34.5342 42.4949 27.8473C42.4949 26.6012 42.3387 25.3935 42.0463 24.2407ZM31.9252 27.8473V30.2389V27.8473Z"
                      stroke="#FFC857"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      opacity="0.1"
                      x="0.996094"
                      y="0.305664"
                      width="63.7459"
                      height="63.7459"
                      rx="16"
                      fill="#FFC857"
                    />
                  </svg>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700} fontSize={'1.25rem'}>
                    Idea
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    We meet with your team to know more about your idea, project
                    and goal. After that, our team creates an action plan and
                    proposal for your project.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card
              sx={{
                p: 3,
              }}
            >
              <Grid container direction={'column'} spacing={3}>
                <Grid item>
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.1"
                      x="0.144531"
                      y="0.305664"
                      width="63.7459"
                      height="63.7459"
                      rx="16"
                      fill="#8D3B72"
                    />
                    <path
                      d="M25.827 31.9953L23.5746 34.2497M35.2072 35.3653L33.0823 40.6775L28.8326 28.9907L40.5193 33.2404L35.2072 35.3653ZM35.2072 35.3653L40.5193 40.6775L35.2072 35.3653ZM26.9075 21.8076L27.733 24.8855L26.9075 21.8076ZM24.7274 27.8911L21.6484 27.0656L24.7274 27.8911ZM34.0916 23.7317L31.8372 25.9862L34.0916 23.7317Z"
                      stroke="#8D3B72"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700} fontSize={'1.25rem'}>
                    Design
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    We meet with your team to know more about your idea, project
                    and goal. After that, our team creates an action plan and
                    proposal for your project.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card
              sx={{
                p: 3,
              }}
            >
              <Grid container direction={'column'} spacing={3}>
                <Grid item>
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.1"
                      x="0.304688"
                      y="0.305664"
                      width="63.7459"
                      height="63.7459"
                      rx="16"
                      fill="#EC91D8"
                    />
                    <path
                      d="M29.7886 37.4902L28.9918 40.6775L27.9293 41.74H36.4288L35.3664 40.6775L34.5695 37.4902H29.7886ZM22.6172 33.2405H41.7409H22.6172ZM24.742 37.4902H39.6161C40.1796 37.4902 40.7201 37.2664 41.1186 36.8679C41.5171 36.4694 41.7409 35.9289 41.7409 35.3654V24.7411C41.7409 24.1775 41.5171 23.6371 41.1186 23.2386C40.7201 22.8401 40.1796 22.6162 39.6161 22.6162H24.742C24.1785 22.6162 23.638 22.8401 23.2395 23.2386C22.8411 23.6371 22.6172 24.1775 22.6172 24.7411V35.3654C22.6172 35.9289 22.8411 36.4694 23.2395 36.8679C23.638 37.2664 24.1785 37.4902 24.742 37.4902Z"
                      stroke="#EC91D8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700} fontSize={'1.25rem'}>
                    Development
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    We meet with your team to know more about your idea, project
                    and goal. After that, our team creates an action plan and
                    proposal for your project.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card
              sx={{
                p: 3,
              }}
            >
              <Grid container direction={'column'} spacing={3}>
                <Grid item>
                  <svg
                    width="65"
                    height="65"
                    viewBox="0 0 65 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.165 29.4544V39.0175V29.4544ZM31.3834 33.0406V39.0175V33.0406ZM26.6019 36.6267V39.0175V36.6267ZM24.2111 43.799H38.5557C39.1898 43.799 39.7979 43.5472 40.2463 43.0988C40.6946 42.6504 40.9465 42.0423 40.9465 41.4083V27.0636C40.9465 26.4296 40.6946 25.8215 40.2463 25.3731C39.7979 24.9247 39.1898 24.6729 38.5557 24.6729H24.2111C23.577 24.6729 22.9689 24.9247 22.5206 25.3731C22.0722 25.8215 21.8203 26.4296 21.8203 27.0636V41.4083C21.8203 42.0423 22.0722 42.6504 22.5206 43.0988C22.9689 43.5472 23.577 43.799 24.2111 43.799Z"
                      stroke="#227C9D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      opacity="0.1"
                      x="0.453125"
                      y="0.305664"
                      width="63.7459"
                      height="63.7459"
                      rx="16"
                      fill="#227C9D"
                    />
                  </svg>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700} fontSize={'1.25rem'}>
                    Launch & Maintenance
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    We meet with your team to know more about your idea, project
                    and goal. After that, our team creates an action plan and
                    proposal for your project.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <Divider />
      </Grid>
    </>
  );
};

export default Hero;
