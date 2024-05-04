import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoRequest } from './actions';

const TodoComponent = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);

  // Add null check before accessing properties
  const isLoading = todo && todo.loading;
  const data = todo && todo.data;
  const error = todo && todo.error;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Todo</h1>
      <p>Title: {data && data.title}</p>
      <p>Completed: {data && data.completed.toString()}</p>
    </div>
  );
};

export default TodoComponent;
