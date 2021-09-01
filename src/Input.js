import useForm from "./useForm";

function Input() {
  const [value, setValue, submit] = useForm();

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default Input;
