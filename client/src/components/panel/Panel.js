import React from 'react';
import LeftPanel from './leftPanel/LeftPanel';
import ArtistList from './artistList/ArtistList';
export default function Panel() {
  return (
    <div className="panel">
      <LeftPanel />
      <ArtistList />
    </div>
  );
}
