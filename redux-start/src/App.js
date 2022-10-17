import logo from "./logo.svg";
import "./App.css";
import { addTodo } from "./redux/actions";
import useReduxDispatch from "./hooks/useReduxDispatch";
import useReduxState from "./hooks/useReduxState";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const state = useReduxState();
  const dispatch = useReduxDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
