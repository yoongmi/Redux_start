import { useRef } from "react";

const TodoForm = ({ add }) => {
  const inputRef = useRef();
  function submit(e) {
    e.preventDefault();
    add(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <form onSubmit={submit}>
      <input ref={inputRef} />
      <button>추가</button>
    </form>
  );
};

export default TodoForm;
