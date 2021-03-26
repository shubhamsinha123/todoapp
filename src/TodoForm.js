import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './UseInputState';
import './ToDo.css';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form className = "todo"
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add Item"
        margin="normal"
        onChange={onChange}
        value={value}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;