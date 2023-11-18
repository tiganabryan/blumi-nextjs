import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useResizeObserver from 'use-resize-observer';

import HeroImage from './HeroImage.jsx';

const Hero = () => {
  const theme = useTheme();

  const heroTextContainerRef = useRef(null);

  const { width, height } = useResizeObserver({
    ref: heroTextContainerRef,
  });

  const [heightIncrease, setHeightIncrease] = useState(0);

  const isXs = useMediaQuery(theme.breakpoints.down(300), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.down('lg'), {
    defaultMatches: true,
  });
  const isXl = useMediaQuery(theme.breakpoints.down('xl'), {
    defaultMatches: true,
  });
  const isLargerThanXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });

  const deviceWidthSmallerThanMedium = useMediaQuery('(max-width: 899px)');

  const heroImageHeightIncrease = {
    xs: 1.4,
    sm: 1.4,
    md: 1.55,
    lg: 1.6,
    xl: 1.9,
  };

  useEffect(() => {
    if (typeof window === 'null') return;

    const heroText = document.getElementById('hero');
    const heroImage = document.querySelector('.hero-background-image');

    const adjustBackgroundHeight = () => {
      if (isXs) {
        setHeightIncrease(heroImageHeightIncrease.xs);
      } else if (isSm) {
        setHeightIncrease(heroImageHeightIncrease.sm);
      } else if (isMd) {
        setHeightIncrease(heroImageHeightIncrease.md);
      } else if (isLg) {
        setHeightIncrease(heroImageHeightIncrease.lg);
      } else if (isXl || isLargerThanXl) {
        setHeightIncrease(heroImageHeightIncrease.xl);
      } else {
        setHeightIncrease(heroImageHeightIncrease.xs);
      }

      console.log(heroText.offsetHeight);
      console.log(heightIncrease);

      const heroImageHeight = heroText.offsetHeight * heightIncrease;

      console.log(heroImageHeight);

      heroImage.style.height = `${heroImageHeight}px`;
    };

    adjustBackgroundHeight();

    window.addEventListener('resize', adjustBackgroundHeight);
    heroText.addEventListener('input', adjustBackgroundHeight);

    return () => {
      window.removeEventListener('resize', adjustBackgroundHeight);
      heroText.removeEventListener('input', adjustBackgroundHeight);
    };
  }, [width]);

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({
        left: 0,
        top: element.offsetTop - 95,
        // 60 = height of navbar
        behavior: 'smooth',
      });
    });
  };

  return (
    <>
      <div
        className="hero-background-image fade-in-animation"
        id="hero-background-image"
      >
        <Grid
          container
          className="text-fade-in-animation"
          id="hero"
          direction={'column'}
          alignItems={deviceWidthSmallerThanMedium ? 'center' : 'left'}
          spacing={3}
          padding={{ xs: 4 }}
          paddingTop={{ xs: 2, sm: 4, md: 10, lg: 8 }}
          marginBottom={{ xs: 0, md: 12 }}
          // position={'absolute'}
          paddingLeft={{ md: '5rem' }}
          overflow={'hidden'}
          top={60}
          left={0}
          ref={heroTextContainerRef}
        >
          <Grid item marginTop={{ xs: 5.5, md: 0 }}>
            <Typography
              component={'h1'}
              fontSize={{
                xs: '2.4rem',
                sm: '3.6rem',
                md: '5.8rem',
                lg: '6.2rem',
              }}
              fontFamily={"'Livvic', sans-serif"}
              color="#227C9D"
              textAlign={deviceWidthSmallerThanMedium ? 'center' : 'left'}
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
              fontSize={{
                xs: '1.4rem',
                sm: '1.7rem',
                md: '2.3rem',
                lg: '2.8rem',
              }}
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
          >
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth={true}
                sx={{
                  fontSize: { md: '1.1rem' },
                }}
                onClick={() => scrollTo('contact-us-section--js-scroll')}
              >
                connect
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  fontSize: { md: '1.1rem' },
                }}
                onClick={() => scrollTo('services-section--js-scroll')}
              >
                view services
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Hero;
