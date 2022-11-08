import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { QueryParamDto } from 'src/query/query-param.dto';

@Controller('task')
@UseGuards(AuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  findOne(@Param() param: QueryParamDto) {
    return this.taskService.findOne(param.id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(@Param() param: QueryParamDto, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(param.id, updateTaskDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  remove(@Param() param: QueryParamDto) {
    return this.taskService.remove(param.id);
  }
}
