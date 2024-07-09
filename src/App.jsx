import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Users from './pages/Users.jsx';
import User from './pages/User.jsx';
import Albums from './pages/Albums.jsx';

import { ThemeContext } from './context/ThemeContext.jsx';
import { useContext } from 'react';

function App() {
    const { theme } = useContext(ThemeContext);
    console.log(theme);
    return (
        <div className={`${theme} div`}>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Users />} />
                        <Route path='users/:id' element={<User />} />
                        <Route path='albums/:id' element={<Albums />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
