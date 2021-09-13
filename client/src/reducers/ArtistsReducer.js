const GET_ARTISTS = 'GET_ARTISTS';
const INIT_GENERS = 'INIT_GENERS';
const SET_GENERS_CHECKD = 'SET_GENERS_CHECKD';
const SEARCH_BOX = 'SEARCH_BOX';

const initialState = {
  artisList: null,
  genersNames: null,
  genersChecked: null,
  searchBox: '',
};

export default function ArtistReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTISTS:
      return { ...state, artisList: payload };
    case INIT_GENERS:
      return {
        ...state,
        genersNames: payload.genersNames,
        genersChecked: payload.genersChecked,
      };
    case SET_GENERS_CHECKD:
      return {
        ...state,
        genersChecked: payload.genersChecked,
        searchBox: payload.searchBox,
      };
    case SEARCH_BOX:
      return {
        ...state,
        searchBox: payload,
      };
    default:
      return state;
  }
}
