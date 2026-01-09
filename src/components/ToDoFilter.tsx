import { useState } from "react";

import { ToDoItem } from "./ToDoItem";
import ToDoList from "./ToDoList"

type FilterType = "all" | "completed" | "pending";

type Props = {
  searchedTodos: ToDo[];
  toDoTotal: number;
  toDoComplteds: number;
  onComplete: () => void;
}

function ToDoFilter({ searchedTodos, toDoTotal, toDoComplteds, onComplete }: Props) {

  const [filter, setFilter] = useState<FilterType>("all");

  const filteredTodos = searchedTodos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  })

  return (
    <>
      <div className="flex flex-row justify-between border-1 border-gray-300 rounded-lg w-full ">
        <button onClick={() => setFilter("all")} className={`${filter === "all" ? "bg-pink-400 font-bold text-white" : ""} py-2 px-4 rounded-lg`}>
          Todas
          <span className={`${filter === "all" ? "bg-pink-300" : "bg-gray-300"} ml-2 px-2 py-1 rounded-full text-xs font-body font-bold`}>
            {toDoTotal}
          </span>
        </button>
        <button onClick={() => setFilter("pending")} className={`${filter === "pending" ? "bg-pink-400 font-bold text-white" : ""} py-2 px-4 rounded-lg`}>
          Pendiente
          <span className={`${filter === "pending" ? "bg-pink-300" : "bg-gray-300"} ml-2 px-2 py-1 rounded-full text-xs font-body font-bold`}  >
            {toDoTotal - toDoComplteds}
          </span>
        </button>
        <button onClick={() => setFilter("completed")} className={`${filter === "completed" ? "bg-pink-400 font-bold text-white" : ""} py-2 px-4 rounded-lg`}>
          Completado
          <span className={`${filter === "completed" ? "bg-pink-300" : "bg-gray-300"} ml-2 px-2 py-1 rounded-full text-xs font-body font-bold`}>
            {toDoComplteds}
          </span>
        </button>
      </div >
      <ToDoList>
        {
          filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <ToDoItem key={todo.text} onComplete={onComplete} {...todo} />
            ))
          ) : <li className="text-center">No existen tareas que coincidan con tu busqueda.</li>
        }
      </ToDoList>
    </>
  )
}

export { ToDoFilter }