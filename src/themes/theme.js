import { createTheme } from "@material-ui/core"

export const theme = createTheme({
  /*   typography: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: 14,
      button: {
        textTransform: 'none',
        letterSpacing: 0,
        fontWeight: 'bold',
      },
    },
    overrides: {
      MuiInput: {
        input: {
          fontWeight: 'bold',
        },
      },
    },
    palette: {
      primary: { main: '#3A8DFF' },
      secondary: { main: '#B0B0B0' },
    }, */
  breakpoints: {
    values: {
      xs: 0,
      sm: 538,
      md: 750,
      lg: 1250,
      xl: 1450,
    },
  },
})
