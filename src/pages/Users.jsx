import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    'http://jsonplaceholder.typicode.com/users'
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setUsers(json);
            } catch (error) {
                console.error('Could not fetch users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Artist list</h2>
            <ul>
                {users &&
                    users.map((user) => (
                        <li key={user.id}>
                            <Link to={'/users/' + user.id} className='user'>
                                {user.name}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default Users;
