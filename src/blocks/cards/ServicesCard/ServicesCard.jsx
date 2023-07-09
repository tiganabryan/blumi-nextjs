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
import SvgIcon from '@mui/material/SvgIcon';

import Container from 'components/Container';

const ServiceCard = ({ iconSVG, iconColour, title, description }) => {
  const theme = useTheme();

  return (
    // <Container maxWidth={800}>
    <Card
      sx={{
        p: 3,
      }}
    >
      <Grid container direction={'column'}>
        <Grid item>
          <div backgroundcolor={iconColour} opacity=".1">
            <SvgIcon htmlColor={iconColour}>{iconSVG}</SvgIcon>
          </div>
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
    // </Container>
    // </Box>
  );
};

export default ServiceCard;
