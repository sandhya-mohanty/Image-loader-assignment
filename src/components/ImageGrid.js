import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGrid = () => {
    const initialApiUrl = 'https://picsum.photos/v2/list?page=1&limit=6';
    const paginationApiUrl = 'https://picsum.photos/v2/list?page=';

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(2); // Start pagination from page 2

    // Fetch initial images
    useEffect(() => {
        const fetchInitialImages = async () => {
            try {
                const res = await axios.get(initialApiUrl);
                setImages(res.data);
            } catch (error) {
                console.error('Error fetching initial images', error);
            }
        };

        fetchInitialImages();
    }, []);

    // Load more images for pagination
    const loadMoreImages = async () => {
        try {
            const res = await axios.get(`${paginationApiUrl}${page}&limit=6`);
            setImages(prevImages => [...prevImages, ...res.data]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error fetching more images', error);
        }
    };

    return (
        <div className="container  mt-2 ">
            <div className="row">
                {images.map(image => (
                    <div key={image.id} className="col-12 col-md-4 mb-4">
                        <div className="card">
                            <img 
                                src={image.download_url} 
                                alt={image.author} 
                                className="card-img-top" 
                            />
                            <div className="card-body">
                                <h5 className="card-title">Image by {image.author}</h5>
                                <a href={image.url} className="btn btn-primary">View on Unsplash</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <button 
                    onClick={loadMoreImages} 
                    className="btn btn-primary mt-4"
                >
                    Load More
                </button>
            </div>
        </div>
    );
};

export default ImageGrid;
