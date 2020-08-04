import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isComplete: false,
    },
    {
      text: 'Meet friend for lunch',
      isComplete: false,
    },
    {
      text: 'Build really cool todo app',
      isComplete: false,
    },
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => {
          <Todo key={index} index={index} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default App;
