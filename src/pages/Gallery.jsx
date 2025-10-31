import React, { useState } from 'react';
import Header from '../components/Header';
import DynamicAlbum from '../components/DynamicAlbum';

const Gallery = () => {
  const [activeAlbum, setActiveAlbum] = useState('album1');

  const albumNames = [
    { id: 'album1', label: 'Album 1' },
    { id: 'album2', label: 'Album 2' },
    { id: 'album3', label: 'Album 3' },
    { id: 'album4', label: 'Album 4' },
    { id: 'album5', label: 'Album 5' },
    { id: 'album6', label: 'Album 6' },
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
