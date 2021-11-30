import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'loadsh';
import { artistsActions } from '../../../reducers/ArtistsReducer';

export default function SearchBox() {
  const dispatch = useDispatch();
  const genersNames = useSelector((state) => state.artist.genersNames);

  const changeSearch = debounce((text) => {
    if (text) {
      dispatch(artistsActions.seacrhBox(text));
    } else {
      const genersCh = new Array(genersNames.length).fill(true);
      dispatch(
        artistsActions.setGeneresCheck({
          genersChecked: genersCh,
          searchBox: null,
        })
      );
    }
  }, 500);
  return (
    <div className='searchbox'>
      <input
        placeholder='search by name/hits'
        onChange={(e) => changeSearch(e.target.value)}
      ></input>
    </div>
  );
}
