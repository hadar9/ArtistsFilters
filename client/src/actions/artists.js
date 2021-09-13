import axios from 'axios';

const GET_ARTISTS = 'GET_ARTISTS';
const INIT_GENERS = 'INIT_GENERS';
const SET_GENERS_CHECKD = 'SET_GENERS_CHECKD';
const SEARCH_BOX = 'SEARCH_BOX';

export const getArtists = () => async (dispatch) => {
  try {
    const res = await axios.get('/artists');
    dispatch({ type: GET_ARTISTS, payload: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const initGenres = (genersNames, genersChecked) => (dispatch) => {
  dispatch({ type: INIT_GENERS, payload: { genersNames, genersChecked } });
};

export const setGenres =
  (genersChecked, searchBox = null) =>
  (dispatch) => {
    dispatch({
      type: SET_GENERS_CHECKD,
      payload: { genersChecked, searchBox },
    });
  };

export const searchB = (text) => (dispatch) => {
  dispatch({ type: SEARCH_BOX, payload: text });
};
