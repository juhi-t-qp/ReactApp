import { TodoDto } from '../dtos/TodoDto';
export declare class TodoController {
    private readonly todos;
    getTodo(id: string): string;
    createTodo(todoDto: TodoDto): string;
}
