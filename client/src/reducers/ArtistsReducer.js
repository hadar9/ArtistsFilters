import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  artisList: null,
  genersNames: null,
  genersChecked: null,
  searchBox: '',
};

const ArtistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    getArtists(state, action) {
      state.artisList = action.payload;
    },

    initGeners(state, action) {
      state.genersNames = action.payload.genersNames;
      state.genersChecked = action.payload.genersChecked;
    },
    setGeneresCheck(state, action) {
      state.genersChecked = action.payload.genersChecked;
      state.searchBox = action.payload.searchBox;
    },

    seacrhBox(state, action) {
      state.searchBox = action.payload;
    },
  },
});

export const getArtistsAsync = () => async (dispatch) => {
  try {
    const res = await axios.get('/artists');
    dispatch(ArtistsSlice.actions.getArtists(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const artistsActions = ArtistsSlice.actions;

export default ArtistsSlice.reducer;
