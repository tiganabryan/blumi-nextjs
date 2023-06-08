import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Map, Form } from './components';
import { Typography } from '@mui/material';

const Contact = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {/* <Grid item xs={12} md={6}>
          <Map />
        </Grid> */}

        <Grid item>
          <Grid container direction={'column'}>
            <Grid item>
              <Box>
                <Box marginBottom={1}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Get in touch with Blumi
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" color={'text.secondary'}>
                    We'd love to talk about how we can help you.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item>
              <Box
                // height={12}
                sx={{
                  // width: 12,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  borderWidth: '3px',
                  height: '33em',
                  padding: 5,
                  marginTop: 3,
                }}
              >
                Insert photo of Alyssa and Tigana?
                {/* "Get in touch w Blumi" needs to be above the photo of Alyssa and I, 
                the photo and form need to be in the same Grid container row. */}
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} md={6} alignItems={'left'}>
          <Form />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
