import React from "react"

import { CreateToDoItem } from '@/components/CreateToDoItem'
import { ToDoFilter } from '@/components/ToDoFilter'
import ToDoList from '@/components/ToDoList'
import { ToDoItem } from '@/components/ToDoItem'
import type { TodoColor } from './config/todoColors'

import imgPortada from '/img/portada.jpg'

import './App.css'

type ToDo = {
  text: string;
  completed: boolean;
  color: TodoColor;
}

const defaultToDo: ToDo[] = [
  { text: "Limpiar la casa", completed: false, color: "blueLight" },
  { text: "Estudiar React", completed: true, color: "orange" },
  { text: "Comprar comida", completed: false, color: "pink" },
  { text: "Organizar escritorio ", completed: true, color: "blueLight" },
  { text: "Terminar Hornet", completed: false, color: "orange" },
  { text: "Comprar lanas bufanda", completed: false, color: "pink" },
]

function App() {
  const [inputCreateSearch, setInputCreateSearch] = React.useState("");
  const [toDos, setTodos] = React.useState(defaultToDo);


  const searchedTodos = toDos.filter(
    (todo) => {
      const toDoText = todo.text.toLocaleLowerCase();
      const searchText = inputCreateSearch.toLocaleLowerCase();
      return toDoText.includes(searchText);
    })

  const toDoComplteds = toDos.filter(todo => !!todo.completed).length;
  const toDoTotal = toDos.length;
  return (
    <>
      <div className='relative w-full h-64'>
        <img src="/SVG/header.svg" alt="Header" className='absolute h-full w-full -z-10 object-cover object-bottom' />
        <div className='flex flex-row justify-center items-center h-4/5 w-full'>
          <div>
            <h1 className="font-semibold">Hola, Gabriela</h1>
            <p className="text-lg">¡Organizemos tu día juntas! <br /> Tienes completas <strong>{toDoComplteds}</strong> de tus <strong>{toDoTotal}</strong> tareas.</p>
          </div>
          <img src={imgPortada} alt="Chica tierna sonriendo" className='mix-blend-multiply h-full' />
        </div>
      </div >
      <div className='w-1/2 m-auto flex flex-col gap-4 justify-center items-center mt-4'>
        <CreateToDoItem
          inputValue={inputCreateSearch}
          setInputValue={setInputCreateSearch}
        />  {/* Component para crear o buscar una tarea */}

        <ToDoFilter searchedTodos={searchedTodos} toDoTotal={toDoTotal} toDoComplteds={toDoComplteds} onComplete = {"hola"} />
      </div>
    </>
  )
}


export default App


