import React from 'react';
import SearchBox from './searchbox/SearchBox';
import TimeNDate from './timeanddate/TimeNDate';

export default function Header() {
  return (
    <div className='header'>
      <SearchBox />
      <TimeNDate />
    </div>
  );
}
