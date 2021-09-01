import { observer } from "mobx-react";
import Todos from "./Todos";
import useStore from "./useStore";

function Display() {
  const store = useStore();
  return (
    <>
      <p>Completed todos: {store.completedTodos.length}</p>
      <Todos />
    </>
  );
}

// export default Display;
export default observer(Display);
