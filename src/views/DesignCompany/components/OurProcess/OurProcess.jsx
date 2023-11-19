import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Typography, CardActionArea } from '@mui/material';

const OurProcess = () => {
  return (
    <Grid
      container
      direction={'column'}
      paddingX={{ xs: 6, md: 3 }}
      marginBottom={{ xs: 3, md: 8 }}
      id="services-section--js-scroll"
    >
      <Grid item container alignContent={'center'} direction={'column'}>
        <Grid item marginBottom={2}>
          <Typography
            variant={'h4'}
            component={'h2'}
            color={'#227C9D'}
            fontWeight={'600'}
            align="center"
            // id="services-section--js-scroll"
            fontFamily={'Lato'}
          >
            Our process
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
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardActionArea href="/services#idea" sx={{ height: '100%' }}>
            <Card
              sx={{
                p: 3,
                borderStyle: 'solid',
                borderColor: '#FFC857',
                borderWidth: '1px',
                height: '100%',
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
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardActionArea href="/services#design" sx={{ height: '100%' }}>
            <Card
              sx={{
                p: 3,
                borderStyle: 'solid',
                borderColor: '#8D3B72',
                borderWidth: '1px',
                height: '100%',
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
                    Your website's custom design will be tailored to your brand
                    and target audience, ensuring that your online presence
                    truly resonates with visitors.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardActionArea href="/services#development" sx={{ height: '100%' }}>
            <Card
              sx={{
                p: 3,
                borderStyle: 'solid',
                borderColor: '#EC91D8',
                borderWidth: '1px',
                height: '100%',
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
                    Translating your design into a responsive web presence, we
                    ensure your websites is secure, performant, and optimized
                    for search engines.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3}>
          <CardActionArea href="/services#maintenance" sx={{ height: '100%' }}>
            <Card
              sx={{
                p: 3,
                borderStyle: 'solid',
                borderColor: '#227C9D',
                borderWidth: '1px',
                // height: '100%',
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
                    Our maintenance plans provide ongoing support to address
                    technical concerns and content updates – giving your team
                    the peace of mind to focus on more pressing matters.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
      <div id="meet-the-team-ref"></div>
    </Grid>
  );
};

export default OurProcess;
