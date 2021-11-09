import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/CssBaseline';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7800',
      white: '#FFFFFFF2',
      light: '#FF78001F'
    },
    secondary: {
      dark: '#1F2933',
      main: '#616E7C',
      light: '#CBD2D9',
    }
  }
})

export const Theme = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}