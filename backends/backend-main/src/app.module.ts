import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {TodoModule} from '@modules/todo/TodoModules'
import {infraModule} from '@modules/infra/InfraModule'
import {DatabaseModule} from '@modules/database/DatabaseModule'

@Module({
  imports: [TodoModule, infraModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
