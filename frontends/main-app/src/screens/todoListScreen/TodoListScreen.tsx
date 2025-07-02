import React from 'react'
import type {ITodo} from '../../types/ITodo'
import {todoListScreenApi} from './api/todoListScreenApi'
import {CreateTodo} from '../../features/createTodo/createTodo'
import {TodoListItem} from './components/TodoListitem'
import type {IPager} from '../../types/IPager' // to add pager
import styles from './TodoListScreen.module.css'
import {WuButton} from '@npm-questionpro/wick-ui-lib' // to add button
import {Button} from './components/Button' // to add button

interface IProps {
  userId?: string
}

export const TodoListScreen: React.FC<IProps> = () => {
  const [pager, setPager] = React.useState<IPager>({page: 1, pageSize: 10}) //initialize pager with default values 1-10
  const {data, refetch, status, error} = todoListScreenApi.useGetTodos(pager)
  // console.log(todos)
  const handleTodoCreated = (_todo: ITodo): void => {
    refetch()
  }
  const handleSelectitem = (item: string) => {
    console.log('Selected item:', item)
  }
  const handleNextPage = (): void => {
    // function to handle next page
    setPager(prevPager => ({
      ...prevPager,
      page: prevPager.page + 1,
    }))
  }

  const handlePreviousPage = (): void => {
    // function to handle prev page
    setPager(prevPager => ({
      ...prevPager,
      page: Math.max(prevPager.page - 1, 1), // Ensure page does not go below 1
    }))
  }

  // const showAlert = () => {
  //   // alert()
  //   return (
  //     <div className="alert alert-primary" role="alert">
  //       A simple primary alert—check it out!
  //     </div>
  //   )
  // }

  if (status === 'pending') {
    return <div>Loading...</div>
  }
  if (status === 'error') {
    throw new Error(error?.message ?? 'An error occurred while fetching todos')
  }

  const todos = data?.data
  if (todos === null) throw new Error('Todos data is null')

  const isTodosEmpty = todos.length === 0

  const isFirstPage = pager.page === 1 // check if the first page
  const lastPage = Math.ceil(data.totalCount / pager.pageSize) || 1
  const isLastPage = pager.page >= lastPage

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        {isTodosEmpty && <h1>Welcome to the Todo App</h1>}
        <CreateTodo onTodoCreated={handleTodoCreated} />
        <div className={styles.pagination}>
          {!isFirstPage && (
            <WuButton onClick={handlePreviousPage} variant="secondary">
              Previous
            </WuButton>
          )}
          {!isLastPage && (
            <WuButton onClick={handleNextPage} variant="secondary">
              Next
            </WuButton>
          )}
        </div>
      </div>

      {!isTodosEmpty && (
        <div>
          {/* <Button color="primary">Button</Button> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <TodoListItem
                  key={todo.id} // unique key for each todo
                  todo={todo} // passing todo object
                  attribute={index} // passing index as attribute
                  onSelectitem={handleSelectitem} // passing the function to handle item selection
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
