import { createTheme } from '@mui/material/styles'

export const shades = {
  primary: {
    100: '#cccccc',
    200: '#999999',
    300: '#666666',
    400: '#333333',
    500: '#000000',
    600: '#000000',
    700: '#000000',
    800: '#000000',
    900: '#000000'
  },
  secondary: {
    100: '#f2ecec',
    200: '#e4d9d8',
    300: '#d7c7c5',
    400: '#c9b4b1',
    500: '#bca19e',
    600: '#96817e',
    700: '#71615f',
    800: '#4b403f',
    900: '#262020'
  },
  neutral: {
    100: '#ffffff',
    200: '#ecebeb',
    300: '#e2e1e1',
    400: '#d9d7d7',
    500: '#cfcdcd',
    600: '#a6a4a4',
    700: '#7c7b7b',
    800: '#535252',
    900: '#292929'
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500]
    },
    secondary: {
      main: shades.secondary[500]
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100]
    }
  },

  typography: {
    fontFamily: ['Fauna One', 'san-serif'].join(','),
    fontSize: 14,
    h1: {
      fontFamily: ['Cinzel', 'san-serif'].join(','),
      fontSize: 48
    },
    h2: {
      fontFamily: ['Cinzel', 'san-serif'].join(','),
      fontSize: 36
    },
    h3: {
      fontFamily: ['Cinzel', 'san-serif'].join(','),
      fontSize: 20
    },
    h4: {
      fontFamily: ['Cinzel', 'san-serif'].join(','),
      fontSize: 14
    },
    smallHeading: {
      fontFamily: ['Open Sans', 'san-serif'].join(','),
      fontSize: 18,
      textTransform: 'uppercase',
      fontWeight: 400
    },
    subtext: {
      fontFamily: ['Open Sans', 'san-serif'].join(','),
      fontSize: 18
    }
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'btnPrimary' },
          style: {
            backgroundColor: shades.secondary[500],
            '&:hover': { backgroundColor: shades.primary[400] },
            color: 'white',
            borderRadius: 5,
            padding: '20px 40px',
            maxHeight: '68px',
            fontFamily: ['Open Sans', 'san-serif'].join(','),
            fontSize: 16,
            fontWeight: '500'
          }
        },
        {
          props: { variant: 'btnPrimary', color: 'secondary' },
          style: {
            backgroundColor: shades.primary[400],
            '&:hover': { backgroundColor: shades.secondary[500] }
          }
        }
      ]
    }
  }
})
