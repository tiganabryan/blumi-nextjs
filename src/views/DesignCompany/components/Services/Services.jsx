import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Services = () => {
  return (
    <Grid
      container
      direction={'column'}
      paddingX={{ xs: 6, md: 3 }}
      marginBottom={{ xs: 3, md: 8 }}
    >
      <Grid item container alignContent={'center'} direction={'column'}>
        <Grid item marginBottom={2}>
          <Typography
            variant={'h4'}
            component={'h2'}
            color={'#227C9D'}
            fontWeight={'600'}
            align="center"
            id="services-section--js-scroll"
            fontFamily={'Lato'}
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
            fontFamily={'Lato'}
          >
            Unlike larger agencies, we will treat your project as if it were our
            own.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        spacing={{ xs: 3 }}
        direction={`xs ? 'column' : 'row'`}
        justifyContent={'center'}
        marginBottom={{ xs: 3 }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              p: 3,
              borderStyle: 'solid',
              borderColor: '#FFC857',
              borderWidth: '1px',
            }}
          >
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <Typography
                  fontWeight={700}
                  fontSize={'1.25rem'}
                  fontFamily={'Lato'}
                >
                  Idea
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontFamily={'Lato'}>
                  We meet with your team to know more about your idea, project
                  and goal. After that, our team creates an action plan and
                  proposal for your project.
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              p: 3,
              borderStyle: 'solid',
              borderColor: '#8D3B72',
              borderWidth: '1px',
            }}
          >
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <Typography
                  fontWeight={700}
                  fontSize={'1.25rem'}
                  fontFamily={'Lato'}
                >
                  Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontFamily={'Lato'}>
                  We meet with your team to know more about your idea, project
                  and goal. After that, our team creates an action plan and
                  proposal for your project.
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              p: 3,
              borderStyle: 'solid',
              borderColor: '#EC91D8',
              borderWidth: '1px',
            }}
          >
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <Typography
                  fontWeight={700}
                  fontSize={'1.25rem'}
                  fontFamily={'Lato'}
                >
                  Development
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontFamily={'Lato'}>
                  We meet with your team to know more about your idea, project
                  and goal. After that, our team creates an action plan and
                  proposal for your project.
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card
            sx={{
              p: 3,
              borderStyle: 'solid',
              borderColor: '#227C9D',
              borderWidth: '1px',
            }}
          >
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <Typography
                  fontWeight={700}
                  fontSize={'1.25rem'}
                  fontFamily={'Lato'}
                >
                  Maintenance
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontFamily={'Lato'}>
                  We meet with your team to know more about your idea, project
                  and goal. After that, our team creates an action plan and
                  proposal for your project.
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
