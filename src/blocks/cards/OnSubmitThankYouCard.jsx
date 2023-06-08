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
    <Grid container>
      <Grid item>
        <Card
          sx={{
            padding: { xs: 4, md: 6 },
            marginBottom: 4,
            width: { xs: '100%' },
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            marginTop: { xs: 0, lg: 13 },
            borderTop: `2px solid ${theme.palette.success.main}`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
            }}
          >
            Thank you for your submission! We will contact you in 1-2 business
            days.
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OnSubmitThankYouCard;
