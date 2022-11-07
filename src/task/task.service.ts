import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamMembers } from 'src/entities/teammember';
import { Repository } from 'typeorm';
import { Task } from 'src/entities/task';
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TeamMembers)
    private teammenberRepository: Repository<TeamMembers>,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    let newTask = new Task();
    newTask.name = createTaskDto.name;
    newTask.description = createTaskDto.description;
    newTask.due_date = createTaskDto.due_date;
    newTask.status = createTaskDto.status;
    const teammember = await this.teammenberRepository.findOne({
      where: { id: createTaskDto.assignee },
    });
    newTask.assignee = new TeamMembers();
    newTask.assignee = teammember;
    return this.taskRepository.save(newTask);
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    let updateTask = new Task();
    updateTask.name = updateTaskDto.name;
    updateTask.description = updateTaskDto.description;
    updateTask.due_date = updateTaskDto.due_date;
    updateTask.status = updateTask.status;
    const teammember = await this.teammenberRepository.findOne({
      where: { id: updateTaskDto.assignee },
    });
    updateTask.assignee = new TeamMembers();
    updateTask.assignee = teammember;
    return this.taskRepository.update({ id: id }, { ...updateTask });
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
