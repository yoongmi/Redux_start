import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import ToDoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer />
        <ToDoFormContainer />
        <TodoListContainer />
      </header>
    </div>
  );
}

export default App;
