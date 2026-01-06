import Check from '/check.svg';
import { TODO_COLORS } from "@/config/todoColors";

type ToDoItemProps = {
  text: string;
  completed: boolean;
  color: string;
}

function ToDoItem(props: ToDoItemProps) {
  return (
    <li className={`${props.completed ? 'line-through' : ''} ${TODO_COLORS[props.color] } hover:brightness-75 transition group flex flex-row items-center justify-between gap-4 w-full p-2 mb-2 rounded-full`}>
      <div className='flex flex-row gap-6'>
        <div className="h-6 w-6 bg-white rounded-full ">
          {props.completed && <img src={Check} alt="Confirmación de que la tarea está completada" className='p-1' />}
        </div>
        {props.text}
      </div>
      <button className='h-6 bg-white p-1 rounded-full hidden group-hover:block'>
        <img src="/close.svg" alt="Eliminar tarea" className='h-full' />
      </button>
    </li>
  )
}

export { ToDoItem };