import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import { useState } from "react";
import Todo from "./Todo";


const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoState);
 const [inputText, setInputText] = useState(""); // Here I use React state since this a local state that will not be shared.

  const addTodo = () => {
     setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), text: inputText },
    ]);
    setInputText("");
  };
  const handleInputChange = (e) => setInputText(e.target.value);

  const clearTodos = () => setTodos([]);

  return (
    <main>
      <input
        value={inputText}
        type="text"
        id="TodoInput"
        onChange={handleInputChange}
      />
      <button className="button-10" onClick={addTodo}>Add todo</button>
      <button onClick={clearTodos}>Clear all</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </main>
  );
};

export default Todos;
