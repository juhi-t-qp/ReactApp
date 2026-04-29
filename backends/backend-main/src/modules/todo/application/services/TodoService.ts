import { Injectable } from '@nestjs/common'
import { TodoRepository } from '@modules/todo/domain/repositories/TodoRepository'
import { TodoEntity } from '@modules/todo/domain/entities/TodoEntity'

@Injectable()
export class TodoService {
    constructor(private readonly todoRepository: TodoRepository) { }

    async createTodo(title: string): Promise<TodoEntity> {
        return await this.todoRepository.createTodo({ title } as TodoEntity)
    }

    async getTodoById(id: number): Promise<TodoEntity | null> {
        return await this.todoRepository.getTodoById(id)
    }
    async getAllTodos(page: number, pageSize: number): Promise<{ data: TodoEntity[], totalCount: number }> {
        const [data, totalCount] = await this.todoRepository.getAllTodos(page, pageSize)
        return { data, totalCount }
    }
}