import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList';
import Counter from './Counter';
import useTodoState from './UseTodoState';
import './style.css';

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      
      <Counter
          callback={(count) => {
            this.setState({ data: count });
          }}
        />
        <Counter />
        <Counter />

      <Typography component="h1" variant="h2">
        Todo List
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);



