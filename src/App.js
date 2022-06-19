import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); //create todoList for react

  return (
    <div className="App">
      <header>
        <h1>Zeaggle's Todo App</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList inputText={inputText} />
    </div>
  );
}

export default App;
