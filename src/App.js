import React from 'react';
import './App.css';
import {TodoList} from "./features/todolist/TodoList";

function App() {
  return (
    <div className="bg-lime-200 pt-2.5">
        <h1 className="text-5xl text-center text-lime-900">Posts</h1>
      <TodoList/>
    </div>
  );
}

export default App;

