import React, { Fragment } from 'react';
import { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Topbar } from 'layouts/Main/components';
import pages from '/Users/user/Desktop/blumi/blumi-nextjs/src/layouts/navigation.js';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import NoSsr from '@mui/material/NoSsr';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ListItemText from '@mui/material/ListItemText';

const MeetYourTeam = ({
  children,
  colorInvert = false,
  bgcolor = 'transparent',
}) => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <div>
      <Grid
        container
        direction={'column'}
        paddingX={{ xs: 6, md: 12 }}
        paddingY={{ xs: 2, md: 2 }}
        marginBottom={{ md: 2 }}
      >
        <Grid
          item
          container
          alignContent={'center'}
          direction={'column'}
          marginBottom={4}
        >
          <Grid item marginTop={4} marginBottom={1}>
            <Typography
              variant={'h4'}
              component={'h2'}
              color={'#227C9D'}
              fontWeight={'600'}
              align="center"
              id="services-section--js-scroll"
              fontFamily={'Lato'}
            >
              Meet Your Collaborators
            </Typography>
          </Grid>

          <Typography
            variant={'h4'}
            component={'h2'}
            color={'#646E73'}
            fontWeight={'600'}
            align="center"
            id="services-section--js-scroll"
            fontFamily={'Lato'}
          >
            We are a designer-developer duo.
          </Typography>
        </Grid>

        {/* <Box> */}
        <Grid container spacing={2} justifyContent={'center'}>
          {[
            {
              name: 'Tigana Bryan',
              title: 'Operations & Web Development',
              avatar: 'https://avatars.githubusercontent.com/u/68758768?v=4',
            },
            {
              name: 'Alyssa Gomez',
              title: 'UI/UX Design',
              avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
            },
          ].map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={i}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Card
                sx={{
                  boxShadow: 0,
                  background: 'transparent',
                  backgroundImage: 'none',
                }}
              >
                <Box
                  component={CardMedia}
                  borderRadius={2}
                  width={1}
                  height={1}
                  minHeight={320}
                  image={item.avatar}
                />
                <Box
                  component={CardContent}
                  bgcolor={'transparent'}
                  marginTop={-5}
                >
                  <Box component={Card}>
                    <CardContent>
                      <ListItemText
                        primary={item.name}
                        secondary={item.title}
                      />
                    </CardContent>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* </Box> */}
      </Grid>
    </div>
  );
};

export default MeetYourTeam;
