/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const ServiceCard = () => {
  const theme = useTheme();

  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    // '& > :not(style)': {
    //   m: 1,
    //       width: 128,
    //       height: 128,
    //     },
    //   }}
    // >
    //   <Paper elevation={3} />
    // </Box>

    <Container maxWidth={800}>
      <Card
        sx={{
          p: { xs: 12, md: 3 },
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderTop: `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
          }}
        >
          User details
        </Typography>
        <Divider sx={{ marginY: 4 }} />
        <form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Enter your name
              </Typography>
              <TextField
                label="Name *"
                variant="outlined"
                name={'name'}
                type={'text'}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Enter your email
              </Typography>
              <TextField
                label="Email *"
                variant="outlined"
                name={'email'}
                fullWidth
              />
            </Grid>
            <Grid item container xs={12}>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Save changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
    // </Box>
  );
};

export default ServiceCard;
