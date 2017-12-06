import {SET_CHARACTER_MOVIES } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_MOVIES:
      return action.movies.sort((firstMovie, secondMovie) =>
      firstMovie.episode_id - secondMovie.episode_id
    );
    default:
      return state;
  };
};