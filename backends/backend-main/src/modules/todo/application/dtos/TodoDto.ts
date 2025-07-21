import {IsEmpty, IsString} from 'class-validator'

export class TodoDto {
  @IsEmpty()
  @IsString()
  title: string
}
