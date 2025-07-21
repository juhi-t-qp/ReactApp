import {Body, Get, Param, ParseIntPipe, Post} from '@nestjs/common'
import {Controller} from '@nestjs/common/decorators/core/controller.decorator'
import {TodoDto} from '../dtos/TodoDto'
import {TodoService} from '../services/TodoService'
import { ITodo } from '../types/ITodo'

@Controller('todos')
export class TodoController {
  private readonly todos: ITodo[] = []
  constructor(private readonly todoService: TodoService) {}
  @Get(':id')
  getTodo(@Param('id') id: string): string {
    const todo = this.todos.find(todo => todo.id === parseInt(id, 10))
    if (!todo) {
      return `Todo with ID ${id} not found`
    }
    return `Todo found: ${JSON.stringify(todo)}`
  }

  @Post()
  createTodo(@Body() todoDto: TodoDto): string {
    const newTodo: ITodo = {
      id: this.todos.length + 1,
      title: todoDto.title,
    }
    this.todos.push(newTodo)
    return `Todo created successfully : ${JSON.stringify(newTodo)}`
  }
}
