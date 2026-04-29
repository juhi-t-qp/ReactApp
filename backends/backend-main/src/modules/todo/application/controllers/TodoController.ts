import { Body, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common'
import { Controller } from '@nestjs/common/decorators/core/controller.decorator'
import { TodoDto } from '../dtos/TodoDto'
import { TodoService } from '../services/TodoService'

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }
    @Get(':id')
    async getTodo(@Param('id') id: string) {
        const todo = await this.todoService.getTodoById(parseInt(id, 10))
        if (!todo) {
            return { data: null, message: `Todo with ID ${id} not found` }
        }
        return { data: todo, message: 'Todo fetched successfully' }
    }

    @Post()
    async createTodo(@Body() todoDto: TodoDto) {
        const newTodo = await this.todoService.createTodo(todoDto.title)
        return { data: newTodo, message: 'Todo created successfully' }
    }

    @Get()
    async getAllTodos(
        @Query('page', ParseIntPipe) page: number,
        @Query('pageSize', ParseIntPipe) pageSize: number,
    ) {
        const result = await this.todoService.getAllTodos(page, pageSize)
        return { data: result, message: 'Todos fetched successfully' }
    }
}