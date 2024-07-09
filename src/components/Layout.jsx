import { Link, Outlet } from 'react-router-dom';
import Button from './Button.jsx';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const Layout = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <header className='header'>
                <Link to='/' className='logo'>
                    LOGO
                </Link>
                <h1>Photo Gallery</h1>
                <Button>{theme} theme</Button>
            </header>
            <Outlet />
        </>
    );
};
export default Layout;
