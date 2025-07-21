import {Module} from '@nestjs/common'
import {DatabaseProviders} from './providers/DatabaseProviders'

@Module({
  imports: [],
  controllers: [],
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders],
})
export class DatabaseModule {}
