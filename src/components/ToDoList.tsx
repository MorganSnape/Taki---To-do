type Props = {
  children: React.ReactNode
}

export default function ToDoList({ children }: Props) {
  return (
    <ul className="w-full">
      {children}
    </ul>
  )
}