import useReduxState from "../hooks/useReduxState";

function TodoList() {
  const state = useReduxState();
  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.text}>{todo.text}</li>
      ))}
    </ul>
  );
}
export default TodoList;
