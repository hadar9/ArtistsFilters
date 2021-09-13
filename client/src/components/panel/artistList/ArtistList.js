import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArtistInfo from './ArtistInfo';
import { getArtists, setGenres } from '../../../actions/artists';

function ArtistList({
  state: { artisList, genersNames, genersChecked, searchBox },
  getArtists,
  setGenres,
}) {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    getArtists();
  }, []);

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
      setGenres(updated, searchBox);
    }
  }, [searchBox]);

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

ArtistList.propTypes = {
  state: PropTypes.object.isRequired,
  getArtists: PropTypes.func.isRequired,
  setGenres: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ state: state });

export default connect(mapStateToProps, { getArtists, setGenres })(ArtistList);
