import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import shadows from './shadows';
import { light, dark } from './palette';

const getTheme = (mode, themeToggler) =>
  // export const themeOptions: ThemeOptions = {
  //   palette: {
  //     type: 'light',
  //     primary: {
  //       main: '#3f51b5',
  //     },
  //     secondary: {
  //       main: '#8D3B72',
  //     },
  //     text: {
  //       secondary: '#000000',
  //       primary: '#227C9D',
  //     },
  //   },
  //   typography: {
  //     fontFamily: "'Lato', sans-serif;",
  //     h1: {
  //       fontFamily: "'Livvic', sans-serif;",
  //     },
  //   },
  // };

  responsiveFontSizes(
    createTheme({
      palette: mode === 'light' ? light : dark,
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#8D3B72',
      },
      text: {
        secondary: '#000000',
        primary: '#227C9D',
      },
      shadows: shadows(mode),
      typography: {
        fontFamily: "'Lato', sans-serif;",
        h1: {
          fontFamily: "'Livvic', sans-serif;",
        },
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: '227C9Df',
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
      themeToggler,
    }),
  );

export default getTheme;
