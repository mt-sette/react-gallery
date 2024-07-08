import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Albums = () => {
    const [images, setImages] = useState([]);
    const { id } = useParams('id');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then((res) => res)
            .then((data) => data.json())
            .then((json) => setImages(json));
    }, [id]);

    return (
        <div>
            <h2>Album {id}</h2>
            <div className='gallery'>
                {images.length &&
                    images.map((image) => (
                        <img key={image.id} src={image.thumbnailUrl} />
                    ))}
            </div>
        </div>
    );
};
export default Albums;
