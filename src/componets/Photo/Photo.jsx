

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodo } from '../../store/actions';


const Photo = ({ todo, loading, error, fetchTodo }) => {
  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return (
    <div>
      <h1>Todo:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        todo && (
          <div>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          </div>
        )
      )}
    </div>
  );
};

// Photo.jsx

const mapStateToProps = (state) => ({
    todo: state.todo ? state.todo.todo : null,
    loading: state.todo ? state.todo.loading : false,
    error: state.todo ? state.todo.error : null
  });
  

const mapDispatchToProps = {
  fetchTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
