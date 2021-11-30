import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArtistInfo from './ArtistInfo';
import {
  getArtistsAsync,
  artistsActions,
} from '../../../reducers/ArtistsReducer';
export default function ArtistList() {
  const [artists, setArtists] = useState(null);

  const dispatch = useDispatch();
  const genersNames = useSelector((state) => state.artist.genersNames);
  const genersChecked = useSelector((state) => state.artist.genersChecked);
  const artisList = useSelector((state) => state.artist.artisList);
  const searchBox = useSelector((state) => state.artist.searchBox);

  useEffect(() => {
    dispatch(getArtistsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (searchBox) {
      const toLower = searchBox.toLowerCase();
      const arr = artisList.filter(
        (artist) =>
          artist.name.includes(toLower) ||
          artist.greatest_hits.includes(toLower)
      );
      setArtists(arr);
      const geners = new Set(arr.map((artist) => artist.genres).flat(1));
      const updated = new Array(genersNames.length).fill(false);
      geners.forEach(function (name) {
        const index = genersNames.indexOf(name);
        updated[index] = true;
      });
      dispatch(
        artistsActions.setGeneresCheck({ genersChecked: updated, searchBox })
      );
    }
  }, [dispatch, searchBox]);

  useEffect(() => {
    if (genersChecked && searchBox === null) {
      const arr = [];
      artisList.forEach((artist) => {
        for (const [index, gener] of genersNames.entries()) {
          if (genersChecked[index] && artist.genres.includes(gener)) {
            arr.push(artist);
            break;
          }
        }
      });
      setArtists(arr);
    }
  }, [genersChecked]);

  return (
    <div className='artistlist'>
      {artists ? (
        <>
          <h1>Artists list:</h1>
          <div className='artistlisto'>
            {artists.map((artist) => (
              <ArtistInfo key={artist.id} artist={artist} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
