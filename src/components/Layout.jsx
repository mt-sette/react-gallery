import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header className='header'>
                <Link to='/' className='logo'>
                    LOGO
                </Link>
                <h1>Photo Gallery</h1>
            </header>
            <Outlet />
        </>
    );
};
export default Layout;
