import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Albums = () => {
    const [images, setImages] = useState(null);
    const { id } = useParams('id');

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setImages(json);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Could not fetch images:', error);
                }
            }
        };

        fetchImages();
    }, [id]);

    return (
        <div>
            <h2>Album {id}</h2>
            <div className='gallery'>
                {images &&
                    images.map((image) => (
                        <img
                            key={image.id}
                            alt={image.title}
                            src={image.thumbnailUrl}
                        />
                    ))}
            </div>
        </div>
    );
};
export default Albums;
