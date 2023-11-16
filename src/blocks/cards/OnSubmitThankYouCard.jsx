/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const OnSubmitThankYouCard = () => {
  const theme = useTheme();

  return (
    // <Box bgcolor={'alternate.main'}>
    //   <Container maxWidth={800}>
    // <Card
    //   sx={{
    //     p: { xs: 4, md: 6 },
    //     borderTopLeftRadius: 0,
    //     borderTopRightRadius: 0,
    //     borderTop: `2px solid ${theme.palette.primary.main}`,
    //   }}
    // >
    //   <Typography
    //     variant="h5"
    //     sx={{
    //       fontWeight: 700,
    //     }}
    //   >
    //     User details
    //   </Typography>
    //   <Divider sx={{ marginY: 4 }} />
    // </Card>
    //   </Container>
    // </Box>
    <Grid container justifyContent={'center'}>
      <Grid item xs={7} sm={8} md={8} lg={8} xl={10}>
        <Card
          sx={{
            padding: { xs: 4, md: 6 },
            // marginBottom: 4,
            width: { xs: '100%' },
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            marginTop: { xs: 0, lg: 3 },
            // borderTop: `2px solid #8D3B72`,
            backgroundColor: '#ffc8571f',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
            }}
            textAlign={'center'}
            color={'#227C9D'}
            fontSize={{
              xs: '1.5rem',
              sm: '1.3rem',
              md: '1.5rem',
              lg: '1.8rem',
              xl: '2rem',
            }}
          >
            Your message has been sent. <br></br>We're looking forward to
            meeting you.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OnSubmitThankYouCard;
