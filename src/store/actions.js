// actions.js

export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';

export const fetchTodoRequest = () => ({
  type: FETCH_TODO_REQUEST,
});

export const fetchTodoSuccess = (todo) => ({
  type: FETCH_TODO_SUCCESS,
  payload: todo,
});

export const fetchTodoFailure = (error) => ({
  type: FETCH_TODO_FAILURE,
  payload: error,
});

export const fetchTodo = () => {
  return async (dispatch) => {
    dispatch(fetchTodoRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const todo = await response.json();
      dispatch(fetchTodoSuccess(todo));
    } catch (error) {
      dispatch(fetchTodoFailure(error));
    }
  };
};
