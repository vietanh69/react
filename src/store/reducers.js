// reducers/todoReducer.js
import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from './actions';

const initialState = {
  todo: null,
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.payload,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
