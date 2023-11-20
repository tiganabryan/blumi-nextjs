import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

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
    services: services,
    about: about,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="blumi | home"
          width={{ xs: 120 }}
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
        <Box marginBottom={1.6}>
          <Link underline="none" color={'black'} href="/">
            home
          </Link>
        </Box>
        <Box>
          <NavItem title={'services'} items={services} />
        </Box>
        <Box>
          <NavItem title={'about blumi'} items={about} />
        </Box>
        <Box marginTop={1.7}>
          <Link underline="none" color={'black'} href="/services#faq">
            faq
          </Link>
        </Box>

        <Box marginTop={4}>
          <Button
            size={'large'}
            // variant="outlined"
            variant="contained"
            fullWidth
            component="a"
            target="blank"
            href="https://github.com/tiganabryan/blumi-nextjs"
          >
            view the github
          </Button>
        </Box>
        {/* <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            href="/#contact-us-ref"
          >
            connect
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
