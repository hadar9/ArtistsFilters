import React, { useState, useEffect } from 'react';

export default function ArtistInfo({ artist }) {
  const [date, setDate] = useState('');

  useEffect(() => {
    const calcDate = new Date(artist.date_of_birth);
    const dateStr = `${calcDate.getDate()}/${
      calcDate.getMonth() + 1
    }/${calcDate.getFullYear()}`;
    setDate(dateStr);
  }, []);

  return (
    <div className='artistinfo'>
      {artist.image_url ? <img src={artist.image_url}></img> : null}
      <div className='info'>
        <p>
          <span style={{ fontWeight: 'bold' }}>Name:</span> {artist.name}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Date of birth: </span>
          {date}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Genres list:</span>{' '}
          {artist.genres.join(',')}
        </p>
      </div>
    </div>
  );
}
