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
      <div className='w-full h-40'>
        <div className='flex flex-row justify-center items-center h-9/12 w-full bg-blue-200'>
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


