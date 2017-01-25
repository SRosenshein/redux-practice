import { combineReducers } from 'redux';
import Books from './books';
import ActiveBook from './active_book';

const rootReducer = combineReducers({
  books: Books,
  activeBook: ActiveBook
});

export default rootReducer;
