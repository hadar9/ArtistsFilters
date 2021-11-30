import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { artistsActions } from '../../../reducers/ArtistsReducer';

export default function LeftPanel() {
  const dispatch = useDispatch();
  const genersNames = useSelector((state) => state.artist.genersNames);
  const genersChecked = useSelector((state) => state.artist.genersChecked);
  const artisList = useSelector((state) => state.artist.artisList);

  const handleOnChange = function (index) {
    const updated = genersChecked.map((elem, i) =>
      i === index ? !elem : elem
    );

    dispatch(
      artistsActions.setGeneresCheck({
        genersChecked: updated,
        searchBox: null,
      })
    );
  };

  useEffect(() => {
    if (artisList) {
      let set = new Set();
      artisList.forEach((artist) => {
        artist.genres.forEach((genre) => set.add(genre));
      });
      const genersName = [...set];
      const genersCh = new Array(genersName.length).fill(true);
      dispatch(
        artistsActions.initGeners({
          genersNames: genersName,
          genersChecked: genersCh,
        })
      );
    }
  }, [artisList]);

  return (
    <div className='leftpanel'>
      {genersNames ? (
        <>
          <h1>Genres filter:</h1>
          <div className='geners'>
            {genersNames.map((gener, index) => (
              <div key={gener}>
                <label>
                  <input
                    type='checkbox'
                    id={`custom-checkbox-${gener}`}
                    name={gener}
                    checked={genersChecked[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  {` ${gener}`}
                </label>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
