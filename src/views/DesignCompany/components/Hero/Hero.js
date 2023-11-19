import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Hero = () => {
  const theme = useTheme();

  const deviceWidthSmallerThanMedium = useMediaQuery('(max-width: 899px)');

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({
        left: 0,
        top: element.offsetTop - 95, // 95 = offset height of navbar
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
          spacing={3}
          padding={{ xs: 4 }}
          paddingTop={{ xs: 0, sm: 2, md: 7, lg: 8 }}
          marginBottom={{ xs: 0, md: 12 }}
          paddingLeft={{ md: '5rem' }}
          overflow={'hidden'}
          top={60}
          left={0}
        >
          <Grid item marginTop={{ xs: 5.5, md: 0 }} marginBottom={{ xs: 0 }}>
            <Typography
              component={'h1'}
              fontSize={{
                xs: '2.8rem',
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

          <Grid item xs={12} md={6} marginBottom={{ xs: 2, md: 3 }}>
            <Typography
              variant="h4"
              component="p"
              color={'white'}
              fontSize={{
                xs: '1.5rem',
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

            <Grid item marginBottom={{ sm: 25, md: 30, lg: 45, xl: 37 }}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className="view-services-button"
                href="/services"
                sx={{
                  fontSize: { md: '1.1rem' },
                }}
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
