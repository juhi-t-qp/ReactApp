import React, {useState} from 'react'
import type {ITodo} from '../../../types/ITodo'
import {Link} from 'react-router'
import styles from './TodoListitem.module.css'
// import styles from '../TodoListScreen.module.css'

interface IProps {
  todo: ITodo // Todo item with ITodo type
  attribute?: number // serial number (I provided attribute as name)
  onSelectitem: (item: string) => void // function to handle item selection
}

export const TodoListItem: React.FC<IProps> = ({
  todo,
  attribute,
  onSelectitem,
}) => {
  // arguments should contains the properties that are passed or that are used in the below function (here todo,attribute,name)
  const [selectedIndex, setSelectedIndex] = useState(-1) //
  return (
    <tr>
      <td>{todo.id}</td>
      {/* <td
        className={selectedIndex === todo.id ? styles.active : ''}
        onClick={() => {
          setSelectedIndex(todo.id), onSelectitem(todo.title) // set the selected index and call the onSelectitem function with todo title
        }}
      >
        {todo.title}
      </td> */}
      <td>
        <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
      </td>
    </tr>
  )
}
