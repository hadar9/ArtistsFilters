import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ArtistsReducer from '../reducers/ArtistsReducer';

const initalState = {};

const middleware = [thunk];

const store = createStore(
  ArtistsReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
