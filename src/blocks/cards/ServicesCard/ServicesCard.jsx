/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

const ServiceCard = ({ iconSVG, iconColour, title, description }) => {
  return (
    <Card
      sx={{
        p: 3,
      }}
    >
      <Grid container direction={'column'} spacing={3}>
        <Grid item>
          <SvgIcon>{iconSVG}</SvgIcon>
        </Grid>
        <Grid item>
          <Typography fontWeight={700} fontSize={'1.25rem'}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ServiceCard;
