import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NavItemNoDropdown = ({ title, id, path, colorInvert = false }) => {
  //   const theme = useTheme();

  //   const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  // this need to link to page, not open dropdown
  //   const handleClick = (event, popoverId) => {
  //     setAnchorEl(event.target);
  //     setOpenedPopoverId(popoverId);
  //     console.log(event, event.target);
  //   };

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  //   const hasActiveLink = () => items.find((i) => i.href === activeLink);
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        aria-describedby={id}
        sx={{ cursor: 'pointer' }}
        // onClick={(e) => handleClick(e, id)}
      >
        <Typography
          //   fontWeight={openedPopoverId === id || hasActiveLink() ? 700 : 400}
          color={linkColor}
          href={path}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

NavItemNoDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  colorInvert: PropTypes.bool,
};

export default NavItemNoDropdown;
