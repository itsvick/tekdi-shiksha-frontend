import {
  PaletteColorOptions,
  SimplePaletteColorOptions,
  // PaletteColor,
  // PaletteColorOptions,
  Color,
  createTheme,
} from '@mui/material';
import { ColorPartial } from '@mui/material/styles/createPalette';
/* // declare module "@mui/material/styles" {
//   interface Palette {
//     neutrals: PaletteColor;
//     outLines: PaletteColor;
//   }
//   interface PaletteOptions {
//     neutrals: PaletteColorOptions;
//     outLines: PaletteColorOptions;
//   }
// } */

interface customColor extends Color {
  A900?: string;
}

export type CustomPaletteColorOptions = SimplePaletteColorOptions | ColorPartial | customColor;

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FDBE16',
      light: '#FFDEA1',
    },
    secondary: {
      main: '#0D599E',
      light: '#E7F3F8',
    },
    success: {
      main: '#1A8825',
      light: '#C0FFC7',
    },
    info: {
      main: '#064471',
      light: '#D6EEFF',
    },
    warning: {
      '100': '#17130B',
      '200': '#261900',
      '300': '#1F1B13',
      '400': '#7C766F',
      '500': '#969088',
      '600': '#B1AAA2',
      '700': '#DED8E1',
      '800': '#F8EFE7',
      '900': '#DADADA',
      A100: '#D0C5B4',
      A200: '#4D4639',
      A400: '#FFFFFF',
      A700: '#EDEDED',
      A900: '#f8f0db'
  } as CustomPaletteColorOptions,
    error: {
      main: '#BA1A1A',
      light: '#FFDAD6',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          border: '1px solid #1E1B16',
          color: '#1E1B16',
        },
        containedPrimary: {
          backgroundColor: '#FDBE16',
          border: 'none',
          //   '&:hover': {
          //     backgroundColor: '#FDBE161F'
          //   }
        },
        outlinedPrimary: {
          backgroundColor: 'none',
          border: '1px solid #1E1B16',
          //   '&:hover': {
          //     backgroundColor: '#0D599E'
          //   }
        },
        textPrimary: {
          backgroundColor: 'none',
          border: 'none',
          color: '#0D599E',
          //   '&:hover': {
          //     backgroundColor: '6750A41F',
          //     border: 'none'
          //   }
        },
        containedSecondary: {
          backgroundColor: '#fbbc13',
          //   '&:hover': {
          //     backgroundColor: '#b20041'
          //   }
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '16px', // Override the border radius
          width: '90vw',
          maxWidth: '340px',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '22px',
      fontWeight: 400,
      lineHeight: '28px',
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      marginBottom: '0.75rem',
    },
    h3: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      marginBottom: '0.5rem',
    },
    h4: {
      //h4 is a large label style
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.1px',
    },
    h5: {
      //h5 is a medium label style
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '16px',
      letterSpacing: '0.5px',
    },
    h6: {
      //h6 is a small label style
      fontSize: '11px',
      fontWeight: 500,
      lineHeight: '16px',
      letterSpacing: '0.5px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.5px',
      marginBottom: '1rem',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.25px',
      marginBottom: '1rem',
    },
    button: {
      textTransform: 'none',
      fontSize: '14px',
      fontWeight: 600,
    },
  },
});

export default customTheme;
