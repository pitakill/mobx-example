import { types } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";

const Todo = types.model("Todo", {
  title: types.string,
  done: types.boolean,
});

const Todos = types
  .model("TodosStore", {
    todos: types.array(Todo),
  })
  .views((self) => ({
    get completedTodos() {
      return self.todos.filter((t) => t.done);
    },
  }))
  .actions((self) => ({
    addTodo(title, done = false) {
      self.todos.push({ title, done });
    },
    toggleDoneOfTodo(title) {
      const index = self.todos.findIndex((t) => t.title === title);

      self.todos[index].done = !self.todos[index].done;
    },
  }));

export default makeInspectable(Todos.create());
