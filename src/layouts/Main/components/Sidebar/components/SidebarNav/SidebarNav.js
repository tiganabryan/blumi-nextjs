import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
    services: servicesPages,
    about: about,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={0.6} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src="/img/blumiLogoWithText.svg"
            // {
            //   mode === 'light'
            //     ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
            //     : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
            // }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'home'} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={'services'} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={'about blumi'} items={about} />
        </Box>
        <Box>
          <NavItem title={'faq'} items={accountPages} />
        </Box>
        {/* <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box> */}
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="/docs/introduction"
          >
            how this site was built
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
          >
            connect
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
