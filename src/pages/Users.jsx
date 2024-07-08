import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then((res) => res)
            .then((data) => data.json())
            .then((json) => setUsers(json));
    }, []);

    return (
        <div>
            <ul>
                {users.length &&
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
