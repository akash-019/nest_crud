import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/entities/task';
import { Team } from 'src/entities/team';
import { TeamMembers } from 'src/entities/teammember';
import { JwtModule } from '@nestjs/jwt';
import { secret } from 'src/env';
@Module({
  imports: [
    TypeOrmModule.forFeature([Team, TeamMembers, Task]),
    JwtModule.register({
      secret: secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
