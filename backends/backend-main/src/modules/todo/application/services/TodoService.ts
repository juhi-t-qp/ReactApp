import {Injectable} from '@nestjs/common'
import {ITodo} from '../types/ITodo'
import {TodoRepository} from '@modules/todo/domain/repositories/TodoRepository'
import {TodoEntity} from '@modules/todo/domain/entities/TodoEntity'

@Injectable()
export class TodoService {
  private readonly todos: ITodo[] = []

  constructor(private readonly todoRepository: TodoRepository) {}

  async createTodo(title: string): Promise<TodoEntity> {
    const todoEntity: TodoEntity = {
      id: Date.now(), // or use a different method to generate a unique id
      title,
    }
    return await this.todoRepository.createTodo(todoEntity)
  }

  async getTodoById(id: number): Promise<TodoEntity | null> {
    return await this.todoRepository.getTodoById(id)
  }
}
