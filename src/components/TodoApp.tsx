import React, { useCallback, useState, type FC } from 'react'
import TodoCreator from './TodoCreator'
import TodoList from './TodoList'

const TodoApp: FC = () => {
  const [todos, setTodos] = useState<string[]>([])
  const createTodo = useCallback(
    (todo: string) => {
      setTodos([...todos, todo])
    },
    [todos]
  )

  return (
    <>
      <TodoList todos={todos} />
      <TodoCreator onCreate={createTodo} />
    </>
  )
}

export default TodoApp
