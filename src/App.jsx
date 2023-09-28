import './App.css';
import Todos from './components/Todos';
import totalTodos from './state/selectors/TotalTodos';
import { useRecoilValue } from 'recoil';
function App() {
  const totalTodoState = useRecoilValue(totalTodos) 
  return (
  
    <div className="App">
     <h1>Todo list</h1>
     <Todos/>
     <h3>Counter: {totalTodoState  }</h3>
    </div>
    
  );
}

export default App;
