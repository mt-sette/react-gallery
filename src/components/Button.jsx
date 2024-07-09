import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const style = {
    padding: '0.5rem 1rem',
    borderRadius: '5%',
    backgroundColor: 'tomato',
};

const Button = ({ children }) => {
    const { setTheme, theme } = useContext(ThemeContext);
    return (
        <button
            style={{ ...style }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {children}
        </button>
    );
};
export default Button;
