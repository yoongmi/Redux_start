import { useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

const TodoForm = () => {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();
  const input = document.querySelector("input");
  function submit(e) {
    e.preventDefault();
    dispatch(addTodo(inputRef.current.value));
    input.value = "";
  }
  return (
    <form onSubmit={submit}>
      <input ref={inputRef} />
      <button>추가</button>
    </form>
  );
};
export default TodoForm;
