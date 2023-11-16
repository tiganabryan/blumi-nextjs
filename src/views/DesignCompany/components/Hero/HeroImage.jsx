import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

const HeroImage = ({ heightOfTextOverlay }) => {
  const theme = useTheme();

  console.log(heightOfTextOverlay);
  let height = '';
  let heroImage = '';

  const heroImages = {
    extraSmall: 'img/xsHeroImg.svg',
    small: 'img/smHeroImg.svg',
    medium: 'img/mdHeroImg.svg',
    large: 'img/lgHeroImg.svg',
    extraLarge: 'img/xlHeroImg.svg',
  };

  const isXs = useMediaQuery(theme.breakpoints.down(300), {
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
  const isLargerThanXl = useMediaQuery(theme.breakpoints.up('xl'), {
    defaultMatches: true,
  });

  if (isXs) {
    heroImage = heroImages.extraSmall;
    height = heightOfTextOverlay.xs;
  } else if (isSm) {
    heroImage = heroImages.small;
    height = heightOfTextOverlay.sm;
  } else if (isMd) {
    heroImage = heroImages.medium;
    height = heightOfTextOverlay.md;
  } else if (isLg) {
    heroImage = heroImages.large;
    height = heightOfTextOverlay.lg;
  } else if (isXl || isLargerThanXl) {
    heroImage = heroImages.extraLarge;
    height = heightOfTextOverlay.xl;
  } else {
    heroImage = heroImages.extraSmall;
    height = heightOfTextOverlay.xs;
  }

  return (
    <>
      <img src={heroImage} width="100%" height={height} className="hero" />
    </>
  );
};

export default HeroImage;
