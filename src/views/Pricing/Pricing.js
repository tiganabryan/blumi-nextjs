import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Faq,
  Main as MainSection,
  Plans,
  Support,
  PricingCompareTable,
} from './components';

const Pricing = () => {
  const theme = useTheme();

  return (
    <Main>
      <>
        <MainSection />
        {/* <Box>
          bgcolor={'alternate.main'}
          <Container>
            <Support />
          </Container>
        </Box> */}
        {/* <Container>
          <PricingCompareTable />
        </Container> */}
        <Container maxWidth={400} paddingY={'0 !important'}>
          <Divider />
        </Container>
        <Container>
          <Faq />
        </Container>
      </>
    </Main>
  );
};

export default Pricing;
