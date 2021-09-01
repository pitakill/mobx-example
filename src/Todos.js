import useStore from "./useStore";

function Todo({ title, done, toggleDone }) {
  return (
    <label>
      {title}
      <input
        type="checkbox"
        checked={done}
        onChange={() => toggleDone(title)}
      />
    </label>
  );
}

function Todos() {
  const store = useStore();

  return store.todos.map((t, i) => (
    <Todo {...t} key={i} toggleDone={store.toggleDoneOfTodo} />
  ));
}

export default Todos;
