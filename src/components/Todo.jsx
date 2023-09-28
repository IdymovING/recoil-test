import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";



const Todo = ({ text, id }) => {
  const setTodos = useSetRecoilState(todoState); // 

  const deleteTodo = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => id !== todo.id);
    });
  };
  return (
    <div>
      <p>{text}</p>
      <button
      className="button-10"
      iconPosition="leading"
      text="Label"
      type="primary"
    
      onClick={deleteTodo}>X</button>
    </div>
  );
};

export default Todo;
