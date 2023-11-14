import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import HeroImage from './HeroImage.jsx';

// create longer hero img for less than 350 width
const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const deviceWidthSmallerThanMedium = useMediaQuery('(max-width: 899px)');

  return (
    <>
      <HeroImage />
      <Grid
        container
        direction={'column'}
        alignItems={deviceWidthSmallerThanMedium ? 'center' : 'left'}
        spacing={3}
        padding={{ xs: 4 }}
        paddingTop={{ xs: 0, md: 7 }}
        marginBottom={{ xs: 0, md: 12 }}
        position={'absolute'}
        top={0}
        left={0}
      >
        <Grid item marginTop={{ xs: 5.5, md: 0 }}>
          <Typography
            component={'h1'}
            fontSize={{ xs: '2.4rem', sm: '4rem', md: '5.8rem', lg: '6.2rem' }}
            fontFamily={"'Livvic', sans-serif"}
            color="#227C9D"
            textAlign={isMd ? 'left' : 'center'}
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
