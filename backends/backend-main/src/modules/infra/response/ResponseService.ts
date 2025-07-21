import {Injectable} from '@nestjs/common'

@Injectable()
export class ResponseService {
  createResponse<T>(data: T, message?: string, statusCode?: number) {
    return {
      data,
      message,
      statusCode,
    }
  }
}
