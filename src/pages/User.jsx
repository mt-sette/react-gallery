import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const User = () => {
    const [albums, setAlbums] = useState(null);
    const { id } = useParams('id');

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await fetch(
                    `http://jsonplaceholder.typicode.com/albums?userId=${id}`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setAlbums(json);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Could not fetch albums:', error);
                }
            }
        };

        fetchAlbums();
    }, [id]);

    return (
        <div>
            <h2>Albums of user {id}</h2>
            <ul>
                {albums &&
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
