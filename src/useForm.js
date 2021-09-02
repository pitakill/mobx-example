import { useState } from "react";
import useStore from "useStore";

const useForm = () => {
  const [value, setValue] = useState("");
  const store = useStore();

  const submit = (e) => {
    e.preventDefault();
    store.addTodo(value);
    setValue("");
  };

  return [value, setValue, submit];
};

export default useForm;
