import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
const Button = ({ children }) => {
    const { setTheme, theme } = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {children}
        </button>
    );
};
export default Button;
