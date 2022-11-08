import { PartialType } from '@nestjs/mapped-types';
import {
  IsDate,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsDateString()
  @IsNotEmpty()
  due_date?: Date;

  @IsString()
  @IsNotEmpty()
  status?: string;

  @IsInt()
  @IsNotEmpty()
  assignee?: number;
}
