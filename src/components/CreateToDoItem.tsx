import add from "/add.svg"

type Props = {
  inputValue: string;
  setInputValue: (value: string) => void;
}

function CreateToDoItem({ inputValue, setInputValue }: Props) {
  return (
    <div className="flex flex-row justify-between border-2 border-gray-300 rounded-lg py-2 px-4 w-full">
      <input
        value={inputValue}
        onChange={(ev) => {
          setInputValue(ev.target.value);
        }}
        type="text"
        placeholder="Busca o crea una tarea"
        className="flex-1" />
      <button className="bg-cyan-400 border-2 border-cyan-500 rounded-full p-1 cursor-pointer hover:bg-cyan-500 transition-colors">
        <img src={add} alt="Agregar tarea" className="w-10 h-10" />
      </button>
    </div>
  )
}

export { CreateToDoItem }