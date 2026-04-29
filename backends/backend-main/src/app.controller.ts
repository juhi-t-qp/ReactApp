import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello()
    }

    @Get('user')
    getUser() {
        return {
            data: { id: 1, name: 'Juhi', email: 'juhi.t@questionpro.com' },
            message: 'User fetched successfully',
        }
    }
}
