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
      // marginLeft={'1rem'}
      position="sticky"
      top="0px"
      bottom="0px"
      left="0px"
      right="0px"
      alignItems={'center'}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="blumi | home"
        width={{ xs: 130 }}
        paddingLeft={{ xs: 0, md: 1 }}
        // marginLeft={{ xs: 0, md: '.7rem', lg: '1.3rem' }}
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
        paddingRight={{ xs: 0, md: 3 }}
      >
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/"
            color={'primary.main'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            home
          </Link>
        </Box>

        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/services"
            color={'primary.main'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            services
          </Link>
        </Box>

        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/services#faq"
            color={'primary.main'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            faq
          </Link>
        </Box>

        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="#contact-us-section--js-scroll"
            color={'#227C9D'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{ display: { md: 'none' } }}
        alignItems={'center'}
        // marginRight={2}
      >
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
