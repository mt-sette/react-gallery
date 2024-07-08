import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Users from './pages/Users.jsx';
import User from './pages/User.jsx';
import Albums from './pages/Albums.jsx';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Users />} />
                    <Route path='users/:id' element={<User />} />
                    <Route path='albums/:id' element={<Albums />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
