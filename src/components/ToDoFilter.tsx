function ToDoFilter() {
  return (
    <div className="flex flex-row justify-between border-2 border-gray-300 rounded-lg py-2 px-4 w-full">
      <button>
        Todas
        <span className="ml-2 px-2 py-1 rounded-full text-xs font-body font-bold bg-gray-300">
          4
        </span>
      </button>
      <button>
        Pendiente
        <span className="ml-2 px-2 py-1 rounded-full text-xs font-body font-bold bg-gray-300">
          4
        </span>
      </button>
      <button>
        Completado
        <span className="ml-2 px-2 py-1 rounded-full text-xs font-body font-bold bg-gray-300">
          4
        </span>
      </button>
    </div>
  )
}

export { ToDoFilter }