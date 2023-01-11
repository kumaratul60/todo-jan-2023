import "./styles.css";

import { useState, useEffect } from "react";
export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    if (input !== "") {
      e.preventDefault();
      setTodos((prev) => {
        return [...todos, input];
      });
      setInput("");
    }
  };

  const handleDelete = (id) => {
    // const removeTodo = [...todos];
    // removeTodo.splice(id, 1);
    // setTodos(removeTodo);

    setTodos((currentItems) =>
      currentItems.filter((item, index) => index !== id)
    );
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Add todo</button>
      </form>
      <h3> todo list</h3>
      {todos.map((todo, idx) => (
        <div key={idx}>
          {" "}
          {todo} {""}
          <button onClick={() => handleDelete(idx)}>Delete todo</button>
        </div>
      ))}
    </div>
  );
}
