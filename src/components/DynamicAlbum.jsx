import React, { useState } from 'react';

const allImages = import.meta.glob('../assets/gallery/*/*.{png,jpg,jpeg,gif,webp}', {
  eager: true,
});

const DynamicAlbum = ({ folderPath }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Object.entries(allImages)
    .filter(([path]) => path.includes(`gallery/${folderPath}/`))
    .map(([_, module]) => module.default);

  if (images.length === 0) {
    return <p style={{ textAlign: 'center' }}>No images found for {folderPath}</p>;
  }

  return (
    <>
      <div className="album_grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${folderPath}-${index}`}
            onClick={() => setSelectedImage(src)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="image_popup"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Expanded view" className="popup_image" />
        </div>
      )}
    </>
  );
};

export default DynamicAlbum;
