import {Controller} from '@nestjs/common'

@Controller('todos')
export class TodoController {
  @Get [':id']
}
