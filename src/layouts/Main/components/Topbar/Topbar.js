import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
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
      // alignItems={'center'}
      width={1}
      padding={{ xs: 2, md: 3 }}
      // paddingX={{ xs: 1, md: 6 }}
      // position={'sticky'}
      // top: {xs: 0, md: 1}
      // ^^ FIX THE ERROR
      position="absolute"
      // background: rgba(100,100,100,0);
      top="0px"
      bottom="0px"
      left="0px"
      right="0px"
      alignItems="flex-start"

      // backgroundColor={colorInvert ? 'common.white' : 'transparent'}
      // backgroundColor={'rgb(255, 200, 87)'}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        {/* <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        /> */}
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
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
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
