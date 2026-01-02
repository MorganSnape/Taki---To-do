import Check from '/check.svg';
import { TODO_COLORS } from "@/config/todoColors";

type ToDoItemProps = {
  text: string;
  completed: boolean;
  color: string;
}

function ToDoItem(props: ToDoItemProps) {
  return (
    <li className={`${props.completed ? 'line-through' : ''} ${TODO_COLORS[props.color]} flex flex-row gap-4 w-full p-2 mb-2 rounded-full`}>
      <div className="h-6 w-6 bg-white rounded-full ">
        {props.completed && <img src={Check} alt="Confirmación de que la tarea está completada" className='p-1' />}
      </div>
      {props.text}
    </li>
  )
}

export { ToDoItem };