import React, { useState } from 'react';
import Header from '../components/Header';
import DynamicAlbum from '../components/DynamicAlbum';

const Gallery = () => {
  const [activeAlbum, setActiveAlbum] = useState('album1');

  const albumNames = [
    { id: 'album1', label: '2012 5th Anniversary' },
    { id: 'album2', label: '2023 Farewell to Martin Georgiev' },
    { id: 'album3', label: '2025 Farewell to Roger Barnes' },
    { id: 'album4', label: '2023 Christmas' },
    { id: 'album5', label: '2022 15th Anniversary' },
    { id: 'album6', label: 'Past photographs' },
  ];

  console.log('[Gallery.jsx] Rendered with activeAlbum =', activeAlbum);

  return (
    <div>
      <Header />
      <div className="main_text">
        <div className="album_buttons">
          {albumNames.map((album) => (
            <button
              key={album.id}
              className={activeAlbum === album.id ? 'active' : ''}
              onClick={() => {
                console.log('[Gallery.jsx] Button clicked:', album.id);
                setActiveAlbum(album.id);
              }}
            >
              {album.label}
            </button>
          ))}
        </div>

        <DynamicAlbum folderPath={activeAlbum} />
      </div>
    </div>
  );
};

export default Gallery;
