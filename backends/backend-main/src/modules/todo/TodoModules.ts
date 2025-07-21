import {Module} from '@nestjs/common'
import {TodoController} from './application/controllers/TodoController'
import {TodoService} from './application/services/TodoService'
import {infraModule} from '@modules/infra/InfraModule'
import {DatabaseModule} from '@modules/database/DatabaseModule'
import {
  TodoRepository,
  todoRepositoryProvider,
} from './domain/repositories/TodoRepository'

@Module({
  imports: [infraModule, DatabaseModule],
  controllers: [TodoController],
  providers: [TodoService, ...todoRepositoryProvider, TodoRepository],
  exports: [],
})
export class TodoModule {}

