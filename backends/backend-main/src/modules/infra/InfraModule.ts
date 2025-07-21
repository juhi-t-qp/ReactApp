import {Module} from '@nestjs/common'
import {ResponseService} from './response/ResponseService'

@Module({
  imports: [],
  controllers: [],
  providers: [ResponseService],
  exports: [ResponseService],
})
export class infraModule {}
