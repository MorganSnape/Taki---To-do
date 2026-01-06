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
  { text: "Organizar escritorio ", completed: true, color: "blue" },
  { text: "Terminar Hornet", completed: false, color: "blueLight" },
  { text: "Comprar lanas bufanda", completed: false, color: "orange" },
]

function App() {

  return (
    <>
      <div className='relative w-full h-64'>
        <img src="/SVG/header.svg" alt="Header" className='absolute h-full w-full -z-10 object-cover object-bottom' />
        <div className='flex flex-row justify-center items-center h-4/5 w-full'>
          <div>
            <h1>Hola, Gabriela</h1>
            ¡Organizamos tu día juntas!
          </div>
          <img src={imgPortada} alt="Chica tierna sonriendo" className='mix-blend-multiply h-full' />
        </div>
      </div>
      <div className='w-1/2 m-auto flex flex-col gap-4 justify-center items-center'>
        <CreateToDoItem />
        <ToDoFilter />
        <ToDoList>
          {
            defaultToDo.map((todo) => (
              <ToDoItem key={todo.text} {...todo} />
            ))}
        </ToDoList>
      </div>
    </>
  )
}


export default App


