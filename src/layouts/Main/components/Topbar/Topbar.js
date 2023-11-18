import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import pages from 'layouts/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const deviceWidthSmallerThanMedium = useMediaQuery('(max-width: 899px)');

  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      width={1}
      // padding={{ xs: 2, md: 3 }}
      position="sticky"
      top="0px"
      bottom="0px"
      left="0px"
      right="0px"
      alignItems={deviceWidthSmallerThanMedium ? 'center' : 'flex-start'}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="blumi | home"
        width={{ xs: 150, md: 120, lg: 300 }}
      >
        <Box
          component={'img'}
          src="img/blumiLogoWithText.svg"
          height={1}
          width={1}
        />
        {/* DON'T DELETE ^^ THAT'S WHERE THE LOGO GOES */}
      </Box>
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        alignItems={'center'}
        paddingRight={24}
      >
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/agency"
            color={'common.white'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Portfolio
          </Link>
        </Box>

        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/pricing"
            color={'common.white'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Services
          </Link>
        </Box>

        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/about-side-cover"
            color={'common.white'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            About
          </Link>
        </Box>

        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/contact-page-cover"
            color={'common.white'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Contact
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: { md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            color: '#227C9D',
            borderColor: '#227C9D',
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
