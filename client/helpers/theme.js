import createTheme from '@material-ui/core/styles/createTheme';

const theme = createTheme({
    palette: {
        primary: {
            main: '#282c44',
        },
    },
    typography: {
        fontFamily: {
            primary: '"Inter", sans-serif',
            secondary: 'IBM Plex Sans, sans-serif', 
            tertiary: 'Noto Sans, sans-serif'
        }
    }
});

export default theme;