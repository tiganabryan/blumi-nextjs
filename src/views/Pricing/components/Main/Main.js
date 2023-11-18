import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import useMediaQuery from '@mui/material/useMediaQuery';

import Container from 'components/Container';

const mock = [
  {
    title: 'website updates & repair',
    subtitle: 'debugging, content updates',
    // price: { monthly: '$22', annual: '$190' },
    features: [
      "quickly repair your website's nagging errors and give your customers confidence when they visit your website.",
    ],
    isHighlighted: false,
    id: 'site-updates-ref',
  },
  {
    title: 'web design and technical solutions',
    subtitle: 'custom software built for your business',
    // price: { monthly: '$44', annual: '$390' },
    features:
      'whether you need a captivating portfolio site, responsive corporate website, or e-commerce platform, we have the skills, knowledge, and passion to make it happen.',
    isHighlighted: true,
    id: 'web-design-ref',
  },
  {
    title: 'technical additions',
    subtitle: 'one-time additions to your online presence',
    // price: { monthly: '$44', annual: '$390' },
    features:
      "e-commerce integration, customer loyalty programs. let's talk about your customers' specific pain points and how they can be addressed.",
    isHighlighted: true,
    id: 'web-design-ref',
  },
  {
    title: 'maintenance subscription',
    subtitle: 'ongoing technical support, when you need it most',
    // price: { monthly: '$77', annual: '$690' },
    features: [
      'for years, website builders like wix and wordpress have assumed that small business owners want to engineer their own sites rather than focusing on more pressing matters. what if they have it backwards? let us take care of the tedious technical details so you can focus on what matters most: your business.',
    ],
    isHighlighted: false,
    id: 'maintenance-subscription-ref',
  },
  {
    title: 'graphic design',
    subtitle: 'logos, QR codes, and more',
    // price: { monthly: '$77', annual: '$690' },
    features: [
      'craft a consistent brand identity with our graphic design services.',
    ],
    isHighlighted: false,
    id: 'graphic-design-ref',
  },
];

const Main = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  // const renderToggler = () => (
  //   <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
  //     <ToggleButtonGroup value={pricingOption} exclusive onChange={handleClick}>
  //       <ToggleButton
  //         value="annual"
  //         size={isMd ? 'large' : 'small'}
  //         sx={{
  //           backgroundColor:
  //             pricingOption === 'annual'
  //               ? `${theme.palette.primary.light} !important`
  //               : 'transparent',
  //           border: `1px solid ${theme.palette.primary.main}`,
  //         }}
  //       >
  //         <Typography
  //           variant="subtitle2"
  //           sx={{
  //             fontWeight: 700,
  //             color:
  //               pricingOption === 'annual' ? 'common.white' : 'text.primary',
  //           }}
  //         >
  //           Annual
  //         </Typography>
  //       </ToggleButton>
  //       <ToggleButton
  //         value="monthly"
  //         size={isMd ? 'large' : 'small'}
  //         sx={{
  //           backgroundColor:
  //             pricingOption === 'monthly'
  //               ? `${theme.palette.primary.light} !important`
  //               : 'transparent',
  //           border: `1px solid ${theme.palette.primary.main}`,
  //         }}
  //       >
  //         <Typography
  //           variant="subtitle2"
  //           sx={{
  //             fontWeight: 700,
  //             color:
  //               pricingOption !== 'annual' ? 'common.white' : 'text.primary',
  //           }}
  //         >
  //           Monthly
  //         </Typography>
  //       </ToggleButton>
  //     </ToggleButtonGroup>
  //   </Box>
  // );

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container position={'relative'} zIndex={3}>
          <Box>
            <Box marginBottom={4}>
              <Typography
                variant="h3"
                marginBottom={3}
                gutterBottom
                align={'center'}
                sx={{
                  fontWeight: 900,
                }}
              >
                a digital experience that your customers will remember.
              </Typography>

              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'center'}
                marginBottom={2}
              >
                at blumi, we understand that your website is more than just a
                collection of pages – it's the digital face of your brand, the
                gateway to your success.
              </Typography>

              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'center'}
                // marginBottom={4}
              >
                our mission is to create visually stunning and user-friendly
                websites that not only leave a lasting impression but also drive
                real, tangible results.
                <br />
              </Typography>

              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'center'}
                marginBottom={4}
              ></Typography>

              {/* <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'center'}
                marginBottom={4}
              >
                run by the new generation of technical professionals and backed
                by a mature advisory board, blumi is ready to meet you.
              </Typography> */}
            </Box>
            {/* {renderToggler()} */}
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                component={Card}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                variant={'outlined'}
                id={item.id}
              >
                <CardContent
                  sx={{
                    padding: 4,
                  }}
                >
                  <Box marginBottom={2}>
                    <Typography variant={'h4'} fontWeight={600} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color={'text.secondary'}>
                      {item.subtitle}
                    </Typography>
                  </Box>
                  {/* <Box
                    display={'flex'}
                    alignItems={'baseline'}
                    marginBottom={2}
                  >
                    <Typography variant={'h3'} fontWeight={700}>
                      {pricingOption === 'annual'
                        ? item.price.annual
                        : item.price.monthly}
                    </Typography>
                    <Typography
                      variant={'subtitle1'}
                      color={'text.secondary'}
                      fontWeight={700}
                    >
                      {pricingOption === 'annual' ? '/y' : '/mo'}
                    </Typography>
                  </Box> */}
                  <Grid container spacing={1}>
                    {/* {item.features.map((feature, j) => ( */}
                    <Grid
                      item
                      xs={12}
                      // key={j}
                    >
                      <Box
                        component={ListItem}
                        disableGutters
                        width={'auto'}
                        padding={0}
                      >
                        {/* <Box
                            component={ListItemAvatar}
                            minWidth={'auto !important'}
                            marginRight={2}
                          >
                            <Box
                              component={Avatar}
                              bgcolor={theme.palette.primary.main}
                              width={20}
                              height={20}
                            >
                              <svg
                                width={12}
                                height={12}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Box>
                          </Box> */}
                        <ListItemText primary={item.features} />
                      </Box>
                    </Grid>
                    {/* ))} */}
                  </Grid>
                </CardContent>
                <Box flexGrow={1} />
                {/* <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                  <Button size={'large'} variant={'contained'}>
                    Learn more
                  </Button>
                </CardActions> */}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Main;
