import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from 'components/Container';
import TopNav from 'components/TopNav';

import { Topbar, Sidebar, Footer } from './components';

import HeroVector from '../../views/DesignCompany/components/Hero/HeroVector.jsx';
// import { HeroSVG } from '/Users/user/Desktop/blumi/blumi-nextjs/src/img/Group 739.svg';

import pages from '../navigation';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  const viewportWidth = globalThis?.window?.innerWidth;
  const viewportHeight = globalThis?.window?.innerHeight;

  const viewBoxWidth = viewportWidth;
  const viewBoxHeight = viewportHeight;

  return (
    <Box>
      {/* <HeroVector viewBoxWidth={viewBoxWidth} viewBoxHeight={viewBoxHeight} /> */}

      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
        {/* <HeroVector viewBoxWidth={viewBoxWidth} viewBoxHeight={viewBoxHeight} /> */}
        <HeroVector />
        <Topbar
          onSidebarOpen={handleSidebarOpen}
          pages={pages}
          colorInvert={trigger ? false : colorInvert}
        />
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
          {/* <TopNav colorInvert={colorInvert} /> */}
        </Container>
      </Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          {/* <HeroVector /> */}
          {/* <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          /> */}
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
