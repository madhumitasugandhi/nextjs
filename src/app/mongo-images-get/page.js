'use client'

import { useEffect, useState } from "react";

const GetMongoImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/get-mongo-image');
        const result = await response.json();
        console.log('Fetched images:', result);
        if (result.success) {
          setImages(result.images);
        } else {
          console.log('Error fetching images');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <h2>Get Image from MongoDB.</h2>
      <div style={{ display: 'flex', flexWrap: "wrap" }}>
        {images.map((image) => (
          <div key={image._id} style={{ margin: '10px' }}>
            <img
              src={`data:${image.contentType};base64,${image.data}`} // ✅ use directly
              alt={image.name}
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetMongoImage;
