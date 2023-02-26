import React, { type FC, useCallback, useRef, type FormEvent } from 'react'

interface TodoCreatorProps {
  onCreate: (text: string) => void
}

const TodoCreator: FC<TodoCreatorProps> = ({ onCreate }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const formSubmitted = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const inputValue = inputRef.current?.value
      if (inputValue != null && inputValue !== '') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        inputRef.current!.value = ''
        onCreate(inputValue)
      }
    },
    [onCreate]
  )

  return (
    <form onSubmit={formSubmitted}>
      <input ref={inputRef} placeholder="What do you want to do?" />
      <button type="submit">Create</button>
    </form>
  )
}

export default TodoCreator
