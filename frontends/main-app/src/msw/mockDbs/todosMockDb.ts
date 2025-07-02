import type {ITodo} from '../../types/ITodo'

// const todos: ITodo[] = [
//   {id: 1, title: 'Todo 1', status: 'active'},
//   {id: 2, title: 'Todo 2', status: 'completed'},
//   {id: 3, title: 'Todo 3', status: 'active'},
// ]

const initTodos = (): ITodo[] => {
  // function to initialize todos 1-21 items
  return Array.from({length: 21}, (_, index) => ({
    id: index + 1,
    title: `Todo ${index + 1}`,
    status: index % 2 === 0 ? 'active' : 'completed',
  })) as ITodo[] // return an array of ITODO objects
}

let todos: ITodo[] = initTodos() //initialize todo with 21 items

export const todosMockDb = {
  // getTodos: (): {
  //   id: number
  //   title: string
  //   status: 'active' | 'completed'
  // }[] => {
  //   return [...todos]
  // },
  reset: (): void => {
    // function to reset todos
    todos = initTodos() // reinitialize todos with 21 items
  },
  getTodosCount: (): number => {
    //function to get todos count
    return todos.length
  },
  getTodos: (
    // function to get todos with pagination  //
    page: number,
    pageSize: number,
  ): {
    id: number
    title: string
    status: 'active' | 'completed'
  }[] => {
    if (isNaN(page) || page <= 0) {
      throw new Error(`Invalid page number: ${page}`)
    }
    if (!pageSize || pageSize <= 0) {
      throw new Error(`Invalid pageSize: ${pageSize}`)
    }
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const todosForPage = todos.slice(startIndex, endIndex) // slice todos array to get todos for the current page
    return [...todosForPage]
  },
  getTodoById: (id: string): ITodo | null => {
    // function to get todo by id
    const todoId = Number(id)
    if (isNaN(todoId)) {
      throw new Error(`Invalid todoId: ${id}`)
    }
    const todo = todos.find(t => t.id === todoId)
    if (!todo) {
      throw new Error(`Todo with id ${todoId} not found`)
    }
    return {...todo}
  },
  createTodo: (title: string): ITodo => {
    // function to create a new todo
    if (!title || title.trim() === '') {
      throw new Error('Title is required')
    }

    const newTodo: ITodo = {
      id: todos.length + 1,
      title,
      status: 'active',
    }
    todos.push(newTodo)
    return {...newTodo}
  },
}
