import React, { type FC } from 'react'
import TodoListItem from './TodoListItem'

interface TodoListProps {
  todos: string[]
}

const TodoList: FC<TodoListProps> = ({ todos }) => (
  <>
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo} description={todo} />
      ))}
    </ul>
  </>
)

export default TodoList
