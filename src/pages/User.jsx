import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const User = () => {
    const [albums, setAlbums] = useState([]);
    const { id } = useParams('id');

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then((res) => res)
            .then((data) => data.json())
            .then((json) => setAlbums(json));
    }, [id]);
    return (
        <div>
            <h2>Albums of user {id}</h2>
            <ul>
                {albums.length &&
                    albums.map((album) => (
                        <li key={album.id}>
                            <Link to={'/albums/' + album.id}>
                                {album.title}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default User;
