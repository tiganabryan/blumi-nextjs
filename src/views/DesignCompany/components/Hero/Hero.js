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
          spacing={{ xs: 3, md: 5 }}
          padding={{ xs: 4, sm: 0 }}
          paddingTop={{ xs: 4, sm: 3.5, md: 7, lg: 7 }}
          paddingLeft={{ md: '2.5rem', lg: '4rem' }}
          overflow={'hidden'}
          // top={60}
          // left={0}
        >
          <Grid item container className="tagline-text-container">
            <Typography
              component={'h1'}
              fontSize={{
                xs: '2.4rem',
                sm: '3.6rem',
                md: '5.6rem',
                lg: '5.9rem',
                xl: '5.8rem',
              }}
              className="tagline-text"
              fontFamily={"'Livvic', sans-serif"}
              color="#227C9D"
              textAlign={deviceWidthSmallerThanMedium ? 'center' : 'left'}
              lineHeight={1}
            >
              refine your website. <br /> drive growth.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} className="tagline-subheading-container">
            <Typography
              variant="h4"
              component="p"
              color={'white'}
              className="tagline-subheading-text"
              fontSize={{
                xs: '1.3rem',
                sm: '1.7rem',
                md: '2.3rem',
                lg: '2.8rem',
              }}
              // textAlign={deviceWidthSmallerThanMedium ? 'center' : 'left'}
            >
              we'll handle the technical complexities so you can focus on what
              matters most: your clients.
            </Typography>
          </Grid>

          <Grid
            item
            container
            className="cta-button-container"
            // direction={deviceWidthSmallerThanMedium ? 'column' : 'row'}
            spacing={1}
            // alignContent={deviceWidthSmallerThanMedium ? 'center' : 'left'}
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
                id="view-services-button"
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
