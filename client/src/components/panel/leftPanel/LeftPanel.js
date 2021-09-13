import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initGenres, setGenres } from '../../../actions/artists';

function LeftPanel({
  state: { artisList, genersNames, genersChecked },
  initGenres,
  setGenres,
}) {
  const handleOnChange = function (index) {
    const updated = genersChecked.map((elem, i) =>
      i === index ? !elem : elem
    );
    setGenres(updated);
  };

  useEffect(() => {
    if (artisList) {
      let set = new Set();
      artisList.forEach((artist) => {
        artist.genres.forEach((genre) => set.add(genre));
      });
      const genersName = [...set];
      const genersCh = new Array(genersName.length).fill(true);
      initGenres(genersName, genersCh);
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

LeftPanel.propTypes = {
  state: PropTypes.object.isRequired,
  initGenres: PropTypes.func.isRequired,
  setGenres: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ state: state });

export default connect(mapStateToProps, { initGenres, setGenres })(LeftPanel);
