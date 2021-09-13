import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { debounce } from 'loadsh';
import { searchB, setGenres } from '../../../actions/artists';

function SearchBox({ state: { genersNames }, searchB, setGenres }) {
  const changeSearch = debounce((text) => {
    if (text) {
      searchB(text);
    } else {
      const genersCh = new Array(genersNames.length).fill(true);
      setGenres(genersCh);
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

SearchBox.propTypes = {
  state: PropTypes.object.isRequired,
  searchB: PropTypes.func.isRequired,
  setGenres: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({ state: state });

export default connect(mapStateToProps, { searchB, setGenres })(SearchBox);
