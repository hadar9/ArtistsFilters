import { configureStore } from '@reduxjs/toolkit';
import ArtistsReducer from '../reducers/ArtistsReducer';

const store = configureStore({
  reducer: { artist: ArtistsReducer },
});

export default store;
