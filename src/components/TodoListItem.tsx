import React, { type FC } from 'react'

interface TodoListItemProps {
  description: string
}

const TodoListItem: FC<TodoListItemProps> = ({ description }) => (
  <li>{description}</li>
)

export default TodoListItem
