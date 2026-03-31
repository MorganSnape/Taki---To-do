import Icon from "./Icon";

import { TODO_COLORS } from "@/config/todoColors";

type ToDoItemProps = {
  text: string;
  completed: boolean;
  color: string;
  onComplete: () => void;
  onDelete: () => void;
}

function ToDoItem(props: ToDoItemProps) {
  return (
    <li className={`${props.completed ? 'line-through' : ''} ${TODO_COLORS[props.color]} hover:brightness-90 transition group flex flex-row items-center justify-between gap-4 w-full p-2 mb-2 rounded-full cursor-pointer`}>
      <button onClick={props.onComplete} className="">
        <div className='flex flex-row gap-6'>
          <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
            {props.completed && <Icon type='check' />}
          </div>
          {props.text}
        </div>
      </button>
      <button title='Borrar tarea' onClick={props.onDelete} className='h-6 w-6 bg-white p-1 rounded-full hidden group-hover:block'>
        <Icon type='delete' />
      </button>
    </li>
  )
}

export { ToDoItem };