import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

const HeroImage = () => {
  //   let heroImage = '';
  const theme = useTheme();

  const heroImages = {
    extraSmall: 'img/xsHeroImg.svg',
    small: 'img/smHeroImg.svg',
    medium: 'img/mdHeroImg.svg',
    large: 'img/lgHeroImg.svg',
    extraLarge: 'img/xlHeroImg.svg',
  };

  const isXs = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.down('lg'), {
    defaultMatches: true,
  });
  const isXl = useMediaQuery(theme.breakpoints.down('xl'), {
    defaultMatches: true,
  });

  if (isXs) {
    return <img src={heroImages.extraSmall} width="100%" className="hero" />;
  } else if (isSm) {
    return <img src={heroImages.small} width="100%" className="hero" />;
  } else if (isMd) {
    return <img src={heroImages.medium} width="100%" className="hero" />;
  } else if (isLg) {
    return <img src={heroImages.large} width="100%" className="hero" />;
  } else if (isXl) {
    return <img src={heroImages.extraLarge} width="100%" className="hero" />;
  } else {
    return <img src={heroImages.small} width="100%" className="hero" />;
  }
};

export default HeroImage;
