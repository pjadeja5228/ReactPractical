import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';


const MainWrap = ({ children }) => {
    const darkMode = useSelector((state) => state.DarkMode.Enable);
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#90caf9' : '#1976d2',
            },
            background: {
                default: darkMode ? '#121212' : '#ffffff',
            },
        },
        shape: {
            borderRadius: 8, 
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={"login"}>
                {children}
            </div>
        </ThemeProvider>
    )
}

MainWrap.propTypes = {
    children: PropTypes.node
}

export default MainWrap;
